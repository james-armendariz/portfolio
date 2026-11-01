import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { blimpStates } from '../data';
import { MaskHeading, Up } from './motion';

const stops = blimpStates.map((_, i) => i / (blimpStates.length - 1));

// Where the blimp hovers at each state, in the stage's 1600 x 760 coordinates.
const hull = {
    x: [260, 560, 800, 860, 720, 1000, 1130, 1130, 760],
    y: [360, 430, 470, 400, 220, 200, 200, 200, 370],
    r: [-5, 2, 4, 0, -8, 0, 3, 3, -3]
};
const BALL_X = 1040;
const BALL_Y = 570;
const GOAL_X = 1490;
const GOAL_Y = 180;
const HOLD_X = 176; // where the grabber holds the ball, relative to the hull
const HOLD_Y = 92;

const Blimp = () => {
    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
    const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        setIndex(Math.min(blimpStates.length - 1, Math.round(v * (blimpStates.length - 1))));
    });

    const x = useTransform(p, stops, hull.x);
    const y = useTransform(p, stops, hull.y);
    const rotate = useTransform(p, stops, hull.r);
    const transform = useTransform([x, y, rotate], ([a, b, c]) => `translate(${a}px, ${b}px) rotate(${c}deg)`);

    // The ball sits free, rides in the grabber from catching on, then flies at the goal.
    const n = (i) => i / 8;
    const ballX = useTransform(p, [0, n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(7.6), 1],
        [BALL_X, BALL_X, hull.x[2] + HOLD_X, hull.x[3] + HOLD_X, hull.x[4] + HOLD_X, hull.x[5] + HOLD_X, hull.x[6] + HOLD_X, hull.x[7] + HOLD_X, GOAL_X, GOAL_X]);
    const ballY = useTransform(p, [0, n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(7.6), 1],
        [BALL_Y, BALL_Y, hull.y[2] + HOLD_Y, hull.y[3] + HOLD_Y, hull.y[4] + HOLD_Y, hull.y[5] + HOLD_Y, hull.y[6] + HOLD_Y, hull.y[7] + HOLD_Y, GOAL_Y, 650]);
    const ballTransform = useTransform([ballX, ballY], ([a, b]) => `translate(${a}px, ${b}px)`);

    const gate = useTransform(p, [n(0.7), n(1.5), n(2.5), n(3)], [0, 1, 1, 0]);
    const jawTop = useTransform(gate, (v) => `rotate(${-34 * v}deg)`);
    const jawBottom = useTransform(gate, (v) => `rotate(${34 * v}deg)`);
    const coneOpacity = useTransform(p, [0, n(1.4), n(2), n(3.6), n(4), n(5.5), n(6)], [0.3, 0.3, 0, 0, 0.3, 0.3, 0]);
    // The flown path so far, ending exactly under the hull.
    const trail = useTransform(p, (v) => {
        const at = Math.min(hull.x.length - 1, Math.max(0, v * (hull.x.length - 1)));
        const whole = Math.floor(at);
        const points = hull.x.slice(0, whole + 1).map((px, i) => `${px} ${hull.y[i]}`);
        if (whole < hull.x.length - 1) {
            const t = at - whole;
            points.push(`${hull.x[whole] + (hull.x[whole + 1] - hull.x[whole]) * t} ${hull.y[whole] + (hull.y[whole + 1] - hull.y[whole]) * t}`);
        }
        return `M${points.join(' L')}`;
    });

    const state = blimpStates[index];

    return (
        <section id="blimp" className="blimp field-white">
            <div className="blimp__head">
                <MaskHeading className="heading">Buzz Blimps: nine states</MaskHeading>
                <Up as="p" delay={0.1}>
                    With Georgia Tech's Vertically Integrated Projects team, since January 2026, on an
                    autonomous blimp that catches balls and scores goals. I developed and tested a 9-state,
                    13-transition state machine in ROS 2 and C++, plus a mock vision publisher in Python and
                    three keyboard test commands mirrored from the control header, so all nine states can
                    be exercised without hardware. Scroll to fly one mission.
                </Up>
            </div>

            <div className="blimp__run" ref={ref}>
                <div className="blimp__pin">
                    <ol className="blimp__states">
                        {blimpStates.map((s, i) => (
                            <li key={s.id} className={i === index ? 'is-on' : i < index ? 'is-past' : ''}>{s.id}</li>
                        ))}
                    </ol>

                    <svg className="blimp__stage" viewBox="60 60 1520 640" preserveAspectRatio="xMidYMid meet" role="img" aria-label={`The blimp in its ${state.id} state.`}>
                        <motion.path d={trail} fill="none" stroke="#0A0A08" strokeWidth="6" strokeDasharray="0.1 18" strokeLinecap="round" />

                        <g>
                            <rect x={GOAL_X - 6} y={GOAL_Y + 74} width="12" height="506" fill="#0A0A08" />
                            <circle cx={GOAL_X} cy={GOAL_Y} r="74" fill="none" stroke="#0A0A08" strokeWidth="14" />
                        </g>

                        <motion.circle r="30" cx="0" cy="0" fill="#FF3D14" style={{ transform: ballTransform }} />

                        <motion.g style={{ transform }}>
                            <motion.path d="M186 -6 L560 -96 L560 96 L186 6 Z" fill="#EAAA00" style={{ opacity: coneOpacity }} />
                            <path d="M-150 -26 L-250 -96 L-204 -96 L-104 -40 Z" fill="#0A0A08" />
                            <path d="M-150 26 L-250 96 L-204 96 L-104 40 Z" fill="#0A0A08" />
                            <rect x="-226" y="-7" width="80" height="14" fill="#0A0A08" />
                            <ellipse cx="0" cy="0" rx="196" ry="74" fill="#EAAA00" />
                            <path d="M-196 0 A196 74 0 0 0 196 0 Z" fill="#C48E00" />
                            <rect x="-60" y="68" width="150" height="34" fill="#0A0A08" />
                            <rect x="-40" y="76" width="20" height="16" fill="#F3F3EF" />
                            <rect x="-8" y="76" width="20" height="16" fill="#F3F3EF" />
                            <motion.rect x="90" y="70" width="74" height="9" fill="#0A0A08" style={{ originX: '90px', originY: '74px', transform: jawTop }} />
                            <motion.rect x="90" y="92" width="74" height="9" fill="#0A0A08" style={{ originX: '90px', originY: '96px', transform: jawBottom }} />
                            <rect x="-72" y="82" width="14" height="8" fill="#0A0A08" />
                            <rect className="blimp__prop" x="-82" y="60" width="10" height="56" fill="#0A0A08" />
                        </motion.g>
                    </svg>

                    <div className="blimp__word">
                        <motion.p
                            key={state.id}
                            className="blimp__state"
                            initial={{ y: 26, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {state.id}
                        </motion.p>
                        <p className="blimp__says">
                            {state.says}
                            {state.guard && <> Exit on <code>{state.guard}</code>.</>}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blimp;
