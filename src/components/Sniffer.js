import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Count, ease, MaskHeading, Up } from './motion';

// TCP flag bits in wire order, the same constants the sniffer's parser uses.
const FLAGS = [
    { name: 'URG', bit: 0x20 },
    { name: 'ACK', bit: 0x10 },
    { name: 'PSH', bit: 0x08 },
    { name: 'RST', bit: 0x04 },
    { name: 'SYN', bit: 0x02 },
    { name: 'FIN', bit: 0x01 }
];
const FIN = 0x01;
const SYN = 0x02;
const PSH = 0x08;
const URG = 0x20;

// The same checks, in the same order, as StealthScanDetector.inspect() in detectors.py.
const inspect = (flags) => {
    if (flags === 0) return { title: 'NULL scan', reason: 'no TCP flags set' };
    if (flags === FIN) return { title: 'FIN scan', reason: 'lone FIN flag' };
    if (flags === (FIN | PSH | URG)) return { title: 'XMAS scan', reason: 'FIN+PSH+URG' };
    if ((flags & SYN) && (flags & FIN)) return { title: 'SYN+FIN', reason: 'contradictory flags' };
    return null;
};

const presets = [
    { label: 'Normal SYN', flags: SYN },
    { label: 'NULL', flags: 0 },
    { label: 'FIN', flags: FIN },
    { label: 'XMAS', flags: FIN | PSH | URG },
    { label: 'SYN+FIN', flags: SYN | FIN }
];

const stages = ['capture', 'bounded queue', 'parser', 'engine', 'detectors', 'alerts'];

const code = `def inspect(self, packet):
    flags = packet.tcp.flags
    if flags == 0:
        return self._alert(packet, "NULL scan (no TCP flags set)", ...)
    if flags == TCP_FLAG_FIN:
        return self._alert(packet, "FIN scan (lone FIN flag)", ...)
    if flags == (TCP_FLAG_FIN | TCP_FLAG_PSH | TCP_FLAG_URG):
        return self._alert(packet, "XMAS scan (FIN+PSH+URG)", ...)
    if (flags & TCP_FLAG_SYN) and (flags & TCP_FLAG_FIN):
        return self._alert(packet, "Contradictory SYN+FIN flags", ...)
    return None`;

const Sniffer = () => {
    const [flags, setFlags] = useState(SYN);
    const touched = useRef(false);
    const liveRef = useRef(null);
    const inView = useInView(liveRef, { once: true, amount: 0.6 });
    const alert = inspect(flags);

    // Fires one XMAS packet by itself, once, so people see what the keys are for.
    useEffect(() => {
        if (!inView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        const timer = setTimeout(() => {
            if (!touched.current) setFlags(FIN | PSH | URG);
        }, 1400);
        return () => clearTimeout(timer);
    }, [inView]);

    const set = (next) => {
        touched.current = true;
        setFlags(next);
    };

    return (
        <section id="sniffer" className={`sniffer field-black ${alert ? 'sniffer--alert' : ''}`}>
            <div className="sniffer__head">
                <MaskHeading className="heading">Packet sniffer, live</MaskHeading>
                <Up delay={0.1} as="p">
                    A multi-threaded capture pipeline on raw AF_PACKET sockets that decodes Ethernet, IPv4,
                    TCP and UDP and looks for trouble. Below is its stealth-scan detector. Flip the bits of
                    a TCP header and it judges your packet with the same rules.
                </Up>
            </div>

            <div className="sniffer__live" ref={liveRef}>
                <div className="sniffer__keys" role="group" aria-label="TCP flags">
                    {FLAGS.map((flag) => {
                        const on = Boolean(flags & flag.bit);
                        return (
                            <motion.button
                                key={flag.name}
                                type="button"
                                className={`key ${on ? 'key--on' : ''}`}
                                aria-pressed={on}
                                onClick={() => set(flags ^ flag.bit)}
                                whileTap={{ scale: 0.94 }}
                            >
                                <span className="key__bit tnum">{on ? 1 : 0}</span>
                                <span className="key__name">{flag.name}</span>
                            </motion.button>
                        );
                    })}
                </div>

                <div className="sniffer__verdict" aria-live="polite">
                    <motion.p
                        key={alert ? alert.title : 'clean'}
                        className="sniffer__word"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease }}
                    >
                        {alert ? alert.title : 'No alert'}
                    </motion.p>
                    <p className="sniffer__why">
                        {alert ? `Flagged: ${alert.reason}. ` : 'Nothing suspicious in this header. '}
                        Flags byte <code>0x{flags.toString(16).padStart(2, '0')}</code>
                    </p>
                </div>

                <div className="sniffer__presets" role="group" aria-label="Example packets">
                    {presets.map((preset) => (
                        <button
                            key={preset.label}
                            type="button"
                            className={`chip ${flags === preset.flags ? 'chip--on' : ''}`}
                            onClick={() => set(preset.flags)}
                        >
                            {preset.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="sniffer__rest">
                <div className="sniffer__speed">
                    <h3>The parser, moved to C</h3>
                    <p>
                        I offloaded the hot path to a custom CPython C extension, about 1.8x the throughput.
                        Stateful detectors catch vertical and horizontal port scans, and an EWMA adaptive
                        baseline catches traffic-rate anomalies. 24 automated tests, unit and live-socket
                        integration, all pass.
                    </p>
                    <div className="bars">
                        <div className="bar">
                            <span>Python</span>
                            <motion.i style={{ width: `${(225 / 414) * 100}%` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease }} />
                            <b><Count to={225} suffix="K" /> packets/sec</b>
                        </div>
                        <div className="bar bar--hot">
                            <span>C extension</span>
                            <motion.i style={{ width: '100%' }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease, delay: 0.15 }} />
                            <b><Count to={414} suffix="K" /> packets/sec</b>
                        </div>
                    </div>
                    <ol className="pipeline" aria-label="Pipeline stages">
                        {stages.map((stage) => <li key={stage}>{stage}</li>)}
                    </ol>
                    <a className="textlink" href="https://github.com/james-armendariz/Network-Packet-Sniffer-Analyzer" target="_blank" rel="noopener noreferrer">Read the source on GitHub</a>
                </div>
                <Up as="pre" className="sniffer__code" y={32}><code>{code}</code></Up>
            </div>
        </section>
    );
};

export default Sniffer;
