import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ledger } from '../data';
import { Count, ease, MaskHeading, Up } from './motion';
import nova from '../assets/work/nova.jpg';
import locallaunch from '../assets/work/locallaunch.jpg';
import ngcc from '../assets/work/ngcc.jpg';
import hiremap from '../assets/work/hiremap.jpg';

const panels = [
    { name: 'Nova', href: '#nova', src: nova, grow: 5, alt: 'Nova sign-in screen: constellations over the line, someone out there feels it too.', focus: '20% 60%' },
    { name: 'Local Launch', href: '#local-launch', src: locallaunch, grow: 2, alt: 'Local Launch homepage, with its two co-founders under a neon logo.', focus: '72% 50%' },
    { name: 'NGCC', href: '#ngcc', src: ngcc, grow: 3, alt: 'North Georgia Cameras and Cabling homepage, gold on black, with a shield and camera emblem.', focus: '70% 40%' },
    { name: 'Hire Map', href: '#hire-map', src: hiremap, grow: 2, alt: 'The five-stage Kanban application tracker in Hire Map.', focus: '62% 50%' }
];

const MoreWork = () => {
    // Watches the band, not the panels: a fully clipped panel never counts as in view.
    const bandRef = useRef(null);
    const bandInView = useInView(bandRef, { once: true, amount: 0.2 });

    return (
    <section className="more field-black">
        <MaskHeading className="heading more__title">More work</MaskHeading>

        <div className="band" ref={bandRef}>
            {panels.map((panel, i) => (
                <motion.a
                    key={panel.name}
                    href={panel.href}
                    className="band__panel"
                    style={{ '--grow': panel.grow }}
                    initial={{ clipPath: 'inset(100% 0 0 0)' }}
                    animate={bandInView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
                    transition={{ duration: 1.2, ease, delay: i * 0.1 }}
                >
                    <img src={panel.src} alt={panel.alt} loading="lazy" style={{ objectPosition: panel.focus }} width="1500" height="940" />
                    <span>{panel.name}</span>
                </motion.a>
            ))}
        </div>

        <div id="edualign" className="edu">
            <div className="edu__text">
                <MaskHeading as="h3" className="heading">EduAlign</MaskHeading>
                <a className="textlink" href="https://github.com/2026-Hackalytics-DJPS/EduAlign" target="_blank" rel="noopener noreferrer">Read the source on GitHub</a>
                <Up as="p" delay={0.08}>
                    A college discovery and matching platform, built in February 2026 for Hackalytics with
                    React, TypeScript, FastAPI and PostgreSQL: 48 REST endpoints and 8 relational models
                    behind profiles, saved lists, alumni reviews and admin analytics. Matches come with
                    LLM-written explanations and a deterministic fallback.
                </Up>
                <Up as="p" delay={0.14}>
                    A financial planner sits beside the matches, with four engines: cost and ROI analysis, loan simulation, budget tracking, and alternative school comparison.
                </Up>
            </div>

            <div className="edu__figure">
                <dl className="edu__funnel">
                    <div><dd><Count to={6400} suffix="+" /></dd><dt>institutions in College Scorecard, across 3,300+ raw fields</dt></div>
                    <div><dd><Count to={18600} suffix="+" /></dd><dt>alumni ratings merged in with Pandas and scikit-learn</dt></div>
                    <div><dd><Count to={3700} /></dd><dt>institutions in the clean matching dataset</dt></div>
                </dl>
                <p>Matching blends two scores across 8 features:</p>
                <div className="edu__blend">
                    <motion.span className="edu__a" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }}>Weighted cosine similarity, 80%</motion.span>
                    <motion.span className="edu__b" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease, delay: 0.35 }}>Affinity, 20%</motion.span>
                </div>
            </div>
        </div>

        <div className="ledger">
            {ledger.map((item) => (
                <Up as="article" id={item.id} className="ledger__row" key={item.id} y={18}>
                    <h3>{item.name}</h3>
                    <p className="ledger__meta">
                        {item.role}<br />{item.date}<br />{item.stack}
                        {item.href && <><br /><a className="textlink" href={item.href} target="_blank" rel="noopener noreferrer">{item.cta}</a></>}
                    </p>
                    <p className="ledger__body">{item.body}</p>
                </Up>
            ))}
        </div>
    </section>
    );
};

export default MoreWork;
