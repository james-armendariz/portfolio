import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';

const EducationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const courses = [
        'OOP', 'Data Structures & Algorithms', 'Computer Organization & Programming',
        'Objects & Design', 'Systems & Networks', 'Design of Operating Systems',
        'Human Dimensions of Cybersecurity'
    ];

    return (
        <section id="education" className="section education-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">05 — Education</div>
                    <h2 className="section-title">Education</h2>
                </motion.div>

                <motion.div
                    className="education-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div className="education-content">
                        <h3 className="education-school">Georgia Institute of Technology</h3>

                        <div className="education-info">
                            <div className="info-item">
                                <FaMapMarkerAlt />
                                <span>Atlanta, GA</span>
                            </div>
                            <div className="info-item">
                                <FaCalendarAlt />
                                <span>2024 – Present · Est. May 2028</span>
                            </div>
                        </div>

                        <div className="education-degree">
                            <h4>B.S. Computer Science</h4>
                            <p className="degree-status">In Progress</p>
                        </div>

                        <div className="education-details">
                            <motion.div
                                className="detail-item"
                                initial={{ opacity: 0, x: -15 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <span className="detail-label">Concentrations</span>
                                <span className="detail-value">Systems and Architecture &amp; Cybersecurity and Privacy</span>
                            </motion.div>

                            <motion.div
                                className="detail-item gpa-highlight"
                                initial={{ opacity: 0, x: -15 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.45 }}
                            >
                                <span className="detail-value">GPA</span>
                                <span className="gpa-value">3.50</span>
                            </motion.div>
                        </div>

                        <motion.div
                            className="courses-section"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <h4 className="courses-title">Relevant Coursework</h4>
                            <div className="courses-grid">
                                <div className="course-category">
                                    <ul>
                                        {courses.map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <div className="education-highlights">
                            <motion.div className="highlight" whileHover={{ scale: 1.03 }}>
                                <span>AI Development</span>
                            </motion.div>
                            <motion.div className="highlight" whileHover={{ scale: 1.03 }}>
                                <span>Cybersecurity</span>
                            </motion.div>
                            <motion.div className="highlight" whileHover={{ scale: 1.03 }}>
                                <span>Systems</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;
