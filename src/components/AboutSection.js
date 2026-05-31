import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const cards = [
        {
            title: 'Academic Background',
            body: 'Computer Science student at Georgia Tech pursuing concentrations in Intelligence and Cybersecurity & Privacy. Maintaining a 3.50 GPA with a focus on building rigorous foundations in systems, algorithms, and applied AI.'
        },
        {
            title: 'Career Goals',
            body: 'Seeking internships and co-ops to apply my skills in various fields of computer science. Eager to become involved in things cybersecurity, AI, or systems/architecture!'
        },
        {
            title: 'Beyond the Code',
            body: 'French Horn player and orchestral musician, with experience on trumpet, mellophone, and piano. Former marching band section leader. Casual bowler averaging around 210.'
        }
    ];

    return (
        <section id="about" className="section about-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">01 — About</div>
                    <h2 className="section-title">Who I Am</h2>
                </motion.div>

                <div className="about-content">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            className="about-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <span className="about-icon">{card.icon}</span>
                            <h3>{card.title}</h3>
                            <p>{card.body}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="stats-container">
                    {[
                        { num: '3.50', label: 'GPA' },
                        { num: '7+', label: 'Languages' },
                        { num: '4+', label: 'Projects' }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                        >
                            <div className="stat-number">{s.num}</div>
                            <div className="stat-label">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
