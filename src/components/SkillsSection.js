import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJava, FaJsSquare, FaReact, FaHtml5 } from 'react-icons/fa';
import { SiDjango, SiFastapi } from 'react-icons/si';

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const technicalSkills = [
        { name: 'Python', level: 85, icon: <FaPython />, color: '#3776ab' },
        { name: 'Java', level: 80, icon: <FaJava />, color: '#f89820' },
        { name: 'JavaScript', level: 65, icon: <FaJsSquare />, color: '#f7df1e' },
        { name: 'HTML / CSS', level: 75, icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'React', level: 70, icon: <FaReact />, color: '#61dafb' },
        { name: 'C / C++', level: 55, icon: <FaJava />, color: '#9b59b6' },
        { name: 'Assembly', level: 60, icon: <FaJava />, color: '#654FF0' },
        { name: 'Django', level: 65, icon: <SiDjango />, color: '#44b78b' },
        { name: 'FastAPI', level: 60, icon: <SiFastapi />, color: '#009485' }
    ];

    const tools = [
        'Git / GitHub', 'ROS 2', 'PostgreSQL', 'SQLAlchemy',
        'Pandas', 'scikit-learn', 'Matplotlib', 'Scrum / Agile'
    ];

    const softSkills = [
        'Diligence', 'Work Ethic', 'Flexibility', 'Collaboration',
        'Problem-Solving', 'Active Listening', 'Adaptability', 'Leadership'
    ];

    return (
        <section id="skills" className="section skills-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">02 — Skills</div>
                    <h2 className="section-title">Technical Skills</h2>
                </motion.div>

                <div className="skills-content">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="skills-subtitle">Languages & Frameworks</div>
                        <div className="skills-grid">
                            {technicalSkills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-card"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: i * 0.06 + 0.2 }}
                                >
                                    <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                                    <h4>{skill.name}</h4>
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-progress"
                                            style={{ background: skill.color }}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : {}}
                                            transition={{ duration: 1.2, delay: i * 0.06 + 0.3, ease: 'easeOut' }}
                                        />
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="skills-subtitle">Tools & Concepts</div>
                        <div className="soft-skills-grid">
                            {tools.map((t, i) => (
                                <motion.div
                                    key={t}
                                    className="soft-skill-tag"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: i * 0.05 + 0.6 }}
                                >
                                    {t}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <div className="skills-subtitle">Soft Skills</div>
                        <div className="soft-skills-grid">
                            {softSkills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    className="soft-skill-tag"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: i * 0.05 + 0.8 }}
                                    whileHover={{ scale: 1.04 }}
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
