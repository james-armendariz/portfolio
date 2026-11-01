import React, { useLayoutEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HexWall from './HexWall';
import { ease, fitOnFont } from './motion';

const Letters = ({ word, start }) => (
    <span className="hero__line" aria-hidden="true">
        {word.split('').map((letter, i) => (
            <motion.span
                key={i}
                className="hero__letter"
                initial={{ y: '102%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease, delay: start + i * 0.028 }}
            >
                {letter}
            </motion.span>
        ))}
    </span>
);

const Hero = () => {
    const heroRef = useRef(null);
    const nameRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
    const wallY = useTransform(scrollYProgress, [0, 1], [0, 140]);

    // Fits both lines of the name to the frame, whatever the viewport does.
    useLayoutEffect(() => {
        const name = nameRef.current;
        const fit = () => {
            const lines = name.querySelectorAll('.hero__line');
            const width = name.clientWidth;
            name.style.setProperty('--name-size', '100px');
            name.style.setProperty('--james-size', '100px');
            const longest = lines[1].getBoundingClientRect().width;
            const shortest = lines[0].getBoundingClientRect().width;
            const size = (100 * width) / longest;
            name.style.setProperty('--name-size', `${size}px`);
            name.style.setProperty('--james-size', `${window.innerWidth < 760 ? (100 * width) / shortest : size}px`);
            // Rounding at 100px adds up over ten letters, so correct against the real size.
            const corrected = (size * width) / lines[1].getBoundingClientRect().width;
            name.style.setProperty('--name-size', `${corrected}px`);
            if (window.innerWidth >= 760) name.style.setProperty('--james-size', `${corrected}px`);
        };
        return fitOnFont(fit);
    }, []);

    return (
        <section id="top" className="hero" ref={heroRef}>
            <motion.div className="hero__wall" style={{ y: wallY }}>
                <HexWall />
                <p className="hero__caption">
                    Every byte here is my resume. Point at the wall to decode it.
                </p>
            </motion.div>

            <motion.div className="hero__type" style={{ scale }}>
                <motion.div
                    className="hero__say"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.35 }}
                >
                    <p>
                        Computer science at Georgia Tech, in systems and security. I build
                        from the socket up: packet parsers, robot state machines, and a SaaS I co-founded.
                    </p>
                    <a className="button" href="#work">See the work</a>
                </motion.div>

                <h1 className="hero__name" ref={nameRef} aria-label="James Armendariz">
                    <Letters word="James" start={0} />
                    <Letters word="Armendariz" start={0.12} />
                </h1>
            </motion.div>
        </section>
    );
};

export default Hero;
