import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="about" className="section about-section" ref={ref}>
            <motion.div
                className="section-container"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div className="section-header" variants={itemVariants}>
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="about-icon">💻</div>
                        <h3>Academic Background</h3>
                        <p>
                            Aspiring computer scientist with a strong passion for artificial intelligence and 
                            cybersecurity. Currently pursuing my degree at Georgia Tech with a 4.0 GPA.
                        </p>
                    </motion.div>

                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="about-icon">🎯</div>
                        <h3>Career Goals</h3>
                        <p>
                            Seeking to leverage my academic background and experiences to contribute 
                            to innovative projects through internships/co-ops. Eager to acquire hands-on experience in 
                            AI/cybersecurity development and research.
                        </p>
                    </motion.div>

                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="about-icon">🎵</div>
                        <h3>Personal Interests</h3>
                        <p>
                            In my free time, I enjoy playing the French Horn and actively participate in orchestra. 
                            I also have experience with the trumpet, mellophone, and piano. Additionally, I bowl 
                            casually with an average of around 210.
                        </p>
                    </motion.div>
                </div>

                <motion.div className="stats-container" variants={itemVariants}>
                    <div className="stat-item">
                        <motion.div
                            className="stat-number"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            3.35
                        </motion.div>
                        <div className="stat-label">GPA</div>
                    </div>
                    <div className="stat-item">
                        <motion.div
                            className="stat-number"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            7+
                        </motion.div>
                        <div className="stat-label">Programming Languages</div>
                    </div>
                    <div className="stat-item">
                        <motion.div
                            className="stat-number"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            2+
                        </motion.div>
                        <div className="stat-label">Major Projects</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;

