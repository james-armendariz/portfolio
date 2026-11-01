import React from 'react';
import { motion } from 'framer-motion';
import { education, experience, skills } from '../data';
import { ease } from './motion';

const Row = ({ item, i }) => (
    <motion.article
        className="lineup__row"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -6% 0px' }}
        transition={{ duration: 0.7, ease, delay: i * 0.06 }}
    >
        <div className="lineup__line">
            <h3>{item.role}</h3>
            <p>{item.org}</p>
            <p>{item.place}</p>
            <p className="tnum">{item.dates}</p>
        </div>
        <ul>
            {item.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
    </motion.article>
);

const LineUp = () => (
    <section className="lineup field-black">
        <h2 id="experience" className="lineup__part">Experience</h2>
        {experience.map((item, i) => <Row item={item} i={i} key={item.role} />)}

        <h2 id="education" className="lineup__part">Education</h2>
        <Row item={education} i={0} />

        <h2 id="skills" className="lineup__part">Skills</h2>
        {skills.map((row, i) => (
            <motion.div
                className="lineup__skills"
                key={row.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.06 }}
            >
                <h3>{row.label}</h3>
                <p>{row.items}</p>
            </motion.div>
        ))}
    </section>
);

export default LineUp;
