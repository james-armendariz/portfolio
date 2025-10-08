import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJava, FaJsSquare, FaReact, FaHtml5 } from 'react-icons/fa';

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const technicalSkills = [
        { name: "Python", level: 85, icon: <FaPython />, color: "#3776ab" },
        { name: "Java", level: 75, icon: <FaJava />, color: "#007396" },
        { name: "JavaScript", level: 50, icon: <FaJsSquare />, color: "#f7df1e" },
        { name: "HTML/CSS", level: 70, icon: <FaHtml5 />, color: "#e34f26" },
        { name: "React", level: 25, icon: <FaReact />, color: "#61dafb" },
        { name: "C", level: 30, icon: <FaJava />, color: "#00599C" },
        { name: "Assembly", level: 20, icon: <FaJava />, color: "#654FF0" }
    ];

    const softSkills = [
        "Diligence", "Strong Work Ethic", "Flexibility", "Collaboration",
        "Problem-Solving", "Active Listening", "Adaptability", "Leadership"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="section skills-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">My Skills</h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="skills-content">
                    <motion.div
                        className="technical-skills"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h3 className="skills-subtitle">Technical Skills</h3>
                        <div className="skills-grid">
                            {technicalSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-card"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                                >
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <h4>{skill.name}</h4>
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-progress"
                                            style={{ background: skill.color }}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : {}}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="soft-skills"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="skills-subtitle">Soft Skills</h3>
                        <div className="soft-skills-grid">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    className="soft-skill-tag"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

