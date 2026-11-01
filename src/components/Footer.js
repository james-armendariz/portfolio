import React, { useLayoutEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { links } from '../data';
import { fitOnFont } from './motion';

const Footer = () => {
    const ref = useRef(null);
    const markRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
    const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

    useLayoutEffect(() => {
        const mark = markRef.current;
        const fit = () => {
            const box = mark.parentElement.clientWidth;
            mark.style.fontSize = '100px';
            const size = (100 * box) / mark.getBoundingClientRect().width;
            mark.style.fontSize = `${size}px`;
            mark.style.fontSize = `${(size * box) / mark.offsetWidth}px`;
        };
        return fitOnFont(fit);
    }, []);

    return (
        <footer className="footer field-gold" ref={ref}>
            <div className="footer__cols">
                <div>
                    <h2>James Armendariz</h2>
                    <p>Atlanta, GA</p>
                    <p>Georgia Tech, est. May 2028</p>
                </div>
                <div>
                    <h2>On this page</h2>
                    <p><a href="#work">Work</a></p>
                    <p><a href="#experience">Experience</a></p>
                    <p><a href="#about">About</a></p>
                </div>
                <div>
                    <h2>Elsewhere</h2>
                    <p><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    <p><a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>
                <div>
                    <h2>Reach me</h2>
                    <p><a href={`mailto:${links.email}`}>Email</a></p>
                    <p><a href={`tel:${links.phone.replace(/-/g, '')}`}>{links.phone}</a></p>
                </div>
            </div>
            <div className="footer__mark">
                <motion.span ref={markRef} style={{ scale }} aria-hidden="true">Armendariz</motion.span>
            </div>
            <p className="footer__legal">© 2026 James Armendariz. Built with React and Framer Motion. Set in Libre Franklin and Source Serif 4.</p>
        </footer>
    );
};

export default Footer;
