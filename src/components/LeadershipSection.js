import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMusic, FaBowlingBall, FaTrophy, FaUsers } from 'react-icons/fa';

const LeadershipSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            category: "Music",
            icon: <FaMusic />,
            period: "Aug. 2022 - Apr. 2024",
            color: "#9b59b6",
            activities: [
                {
                    title: "Marching Band Section Leader",
                    description: "Responsible for ensuring the high quality of musical and physical performance of my peers in my section.",
                    icon: "🎺"
                },
                {
                    title: "Ensemble Leadership",
                    description: "I often offer advice and encouragement to peers in ensembles I've played in to facilitate a more positive environment for improvement.",
                    icon: "🎵"
                },
                {
                    title: "Community Engagement",
                    description: "Participated in several community orchestras and played in small group gatherings to tailor entertainment.",
                    icon: "🎼"
                }
            ]
        },
        {
            category: "Bowling",
            icon: <FaBowlingBall />,
            period: "Aug. 2014 - Jul. 2022",
            color: "#e74c3c",
            activities: [
                {
                    title: "Team Leadership",
                    description: "During cooperative bowling events where I compete on a team, I frequently found myself being a leader by providing encouragement and valuable coaching to my peers.",
                    icon: "🎳"
                },
                {
                    title: "Competitive Achievement",
                    description: "As a leader, my team and I pushed ourselves past what we thought we could accomplish and earned unforeseeable achievements.",
                    icon: "🏆"
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="leadership" className="section leadership-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Community & Leadership</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">
                        Beyond academics, I actively contribute to my community through music and sports
                    </p>
                </motion.div>

                <motion.div
                    className="leadership-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="leadership-card"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="leadership-header" style={{ background: exp.color }}>
                                <motion.div
                                    className="leadership-icon"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    {exp.icon}
                                </motion.div>
                                <div className="leadership-category">
                                    <h3>{exp.category}</h3>
                                    <p>{exp.period}</p>
                                </div>
                            </div>

                            <div className="leadership-body">
                                {exp.activities.map((activity, i) => (
                                    <motion.div
                                        key={i}
                                        className="activity-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="activity-icon">{activity.icon}</div>
                                        <div className="activity-content">
                                            <h4>{activity.title}</h4>
                                            <p>{activity.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="leadership-stats"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <motion.div
                        className="stat-card"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <FaUsers />
                        <h4>Team Player</h4>
                        <p>Collaborative leadership style</p>
                    </motion.div>
                    <motion.div
                        className="stat-card"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                    >
                        <FaTrophy />
                        <h4>Achievement Oriented</h4>
                        <p>Pushing boundaries together</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadershipSection;

