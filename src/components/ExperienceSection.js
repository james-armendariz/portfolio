import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            title: "Gusto Team Member",
            company: "Gusto",
            location: "Atlanta, GA",
            period: "May 2025 - August 2025",
            color: "#e74c3c",
            responsibilities: [
                "Demonstrated adaptability and teamwork in a high-volume, fast-paced environment, efficiently preparing meals while collaborating with peers and leadership.",
                "Maintained stable operations during peak hours by working independently on the line, ensuring timely and accurate order completion.",
                "Utilized strong communication skills to coordinate inventory needs across stations (line, drive-thru, grill, and prep), optimizing workflow and minimizing delays."
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="experience" className="section experience-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Work Experience</h2>
                    <div className="title-underline"></div>
                </motion.div>

                <motion.div
                    className="experience-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="experience-header" style={{ background: exp.color }}>
                                <motion.div
                                    className="experience-icon"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <FaBriefcase />
                                </motion.div>
                            </div>

                            <div className="experience-body">
                                <h3 className="experience-title">{exp.title}</h3>
                                <h4 className="experience-company">{exp.company}</h4>
                                
                                <div className="experience-meta">
                                    <div className="meta-item">
                                        <FaCalendarAlt />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="meta-item">
                                        <FaMapMarkerAlt />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <ul className="experience-responsibilities">
                                    {exp.responsibilities.map((resp, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                                        >
                                            {resp}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;

