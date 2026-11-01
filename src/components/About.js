import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ease, MaskHeading, Up } from './motion';
import portrait from '../assets/portrait.jpg';

const facts = [
    { big: 'Atlanta', small: 'Where I live and study' },
    { big: '210', small: 'My bowling average' },
    { big: '4', small: 'Instruments: French horn, trumpet, mellophone, piano' }
];

const About = () => {
    const textRef = useRef(null);
    const inView = useInView(textRef, { once: true, amount: 0.2 });

    return (
    <section id="about" className="about field-gold">
        <MaskHeading className="heading">Off the keyboard</MaskHeading>
        <div className="about__grid">
            <ul className="about__facts">
                {facts.map((fact, i) => (
                    <Up as="li" key={fact.big} delay={i * 0.08}>
                        <strong>{fact.big}</strong>
                        <span>{fact.small}</span>
                    </Up>
                ))}
            </ul>
            <div className="about__text" ref={textRef}>
                <p>
                    <motion.span
                        className="about__portrait"
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                        transition={{ duration: 1.2, ease }}
                    >
                        <img src={portrait} alt="James leaning against a tree in a dark blazer and jeans, smiling." loading="lazy" width="686" height="960" />
                    </motion.span>
                    I'm James. Away from a debugger I'm a French horn player and orchestral musician, in
                    community orchestras and small ensembles, and I was a marching band section leader
                    from 2022 to 2024, responsible for how my section played and moved.
                </p>
                <p>
                    I also bowled from 2014 to 2022, often as team leader in cooperative events, coaching
                    teammates toward results we first thought were out of reach. I still bowl for fun, and
                    I'm still around 210.
                </p>
            </div>
        </div>
    </section>
    );
};

export default About;
