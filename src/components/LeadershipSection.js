import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMusic, FaBowlingBall, FaTrophy, FaUsers } from 'react-icons/fa';

const LeadershipSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const experiences = [
        {
            category: 'Music',
            icon: <FaMusic />,
            period: 'Aug. 2022 – Apr. 2024',
            activities: [
                { title: 'Marching Band Section Leader', description: 'Responsible for ensuring the high quality of musical and physical performance of peers in my section.'},
                { title: 'Ensemble Leadership', description: 'Regularly offered advice and encouragement to peers in orchestras and ensembles to cultivate a positive environment for growth.'},
                { title: 'Community Engagement', description: 'Participated in community orchestras and small group gatherings, tailoring performances to varied audiences.'}
            ]
        },
        {
            category: 'Bowling',
            icon: <FaBowlingBall />,
            period: 'Aug. 2014 – Jul. 2022',
            activities: [
                { title: 'Team Leadership', description: 'Frequently served as team leader in cooperative events, providing encouragement and coaching to help peers reach beyond their expectations.' },
                { title: 'Competitive Achievement', description: 'Pushed the team toward accomplishments we initially thought were out of reach, earning meaningful competitive results together.'}
            ]
        }
    ];

    return (
        <section id="leadership" className="section leadership-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">06 — Community</div>
                    <h2 className="section-title">Leadership & Extracurriculars</h2>
                    <p className="section-description">
                        Beyond the classroom — how I lead, contribute, and grow outside of code.
                    </p>
                </motion.div>

                <div className="leadership-grid">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="leadership-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div className="leadership-header">
                                <div className="leadership-icon">{exp.icon}</div>
                                <div className="leadership-category">
                                    <h3>{exp.category}</h3>
                                    <p>{exp.period}</p>
                                </div>
                            </div>
                            <div className="leadership-body">
                                {exp.activities.map((act, j) => (
                                    <motion.div
                                        key={j}
                                        className="activity-item"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: i * 0.15 + j * 0.1 + 0.2 }}
                                    >
                                        <div className="activity-icon">{act.icon}</div>
                                        <div className="activity-content">
                                            <h4>{act.title}</h4>
                                            <p>{act.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="leadership-stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 }}
                >
                    <div className="stat-card">
                        <FaUsers />
                        <h4>Team Player</h4>
                        <p>Collaborative leadership style</p>
                    </div>
                    <div className="stat-card">
                        <FaTrophy />
                        <h4>Achievement Oriented</h4>
                        <p>Pushing boundaries together</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadershipSection;
