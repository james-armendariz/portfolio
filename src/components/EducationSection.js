import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';

const EducationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="section education-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Education</h2>
                    <div className="title-underline"></div>
                </motion.div>

                <motion.div
                    className="education-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="education-header">
                        <motion.div
                            className="education-icon"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <FaGraduationCap />
                        </motion.div>
                    </div>

                    <div className="education-content">
                        <h3 className="education-school">Georgia Institute of Technology</h3>
                        
                        <div className="education-info">
                            <div className="info-item">
                                <FaMapMarkerAlt />
                                <span>Atlanta, GA</span>
                            </div>
                            <div className="info-item">
                                <FaCalendarAlt />
                                <span>2024 - Present</span>
                            </div>
                        </div>

                        <div className="education-degree">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <p className="degree-status">(In Progress)</p>
                        </div>

                        <div className="education-details">
                            <motion.div
                                className="detail-item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <span className="detail-label">Concentration:</span>
                                <span className="detail-value">Intelligence & Cybersecurity and Privacy</span>
                            </motion.div>

                            <motion.div
                                className="detail-item gpa-highlight"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <FaStar className="gpa-star" />
                                <span className="detail-label">GPA:</span>
                                <motion.span
                                    className="detail-value gpa-value"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    3.35
                                </motion.span>
                                <FaStar className="gpa-star" />
                            </motion.div>
                        </div>

                        <motion.div
                            className="courses-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <h4 className="courses-title">Relevant Courses</h4>
                            <div className="courses-grid">
                                <div className="course-category">
                                    <h5>Completed:</h5>
                                    <ul>
                                        <li>Intro to Object-Oriented Programming</li>
                                        <li>Data Structures and Algorithms</li>
                                        <li>Human Dimensions of Cybersecurity</li>
                                    </ul>
                                </div>
                                <div className="course-category in-progress">
                                    <h5>In Progress:</h5>
                                    <ul>
                                        <li>Computer Organization and Programming</li>
                                        <li>Objects and Design</li>
                                        <li>Computing and Society</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <div className="education-highlights">
                            <motion.div
                                className="highlight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="highlight-icon">🎯</span>
                                <span>Focus: AI Development</span>
                            </motion.div>
                            <motion.div
                                className="highlight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="highlight-icon">🔒</span>
                                <span>Focus: Cybersecurity</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;

