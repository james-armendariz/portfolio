import React, { useState } from "react";
import { motion } from "framer-motion";

// Animation Variants for Framer Motion
const progressBarVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// List of technical skills
const technicalSkills = [
    { title: "Javascript", progress: "50%" },
    { title: "Java", progress: "75%" },
    { title: "Python", progress: "85%" },
    { title: "HTML/CSS", progress: "70%" },
    { title: "React", progress: "25%" },
];

// List of soft skills
const softSkills = [
    "Diligence",
    "Strong Work Ethic",
    "Flexibility",
    "Collaboration",
    "Problem-Solving",
    "Active Listening",
    "Adaptability",
];

const Skills = () => {
    // State to toggle visibility of technical skills
    const [showTechnicalSkills, setShowTechnicalSkills] = useState(false);

    // Toggle function for technical skills
    const toggleTechnicalSkills = () => setShowTechnicalSkills(!showTechnicalSkills);

    // State to toggle visibility of soft skills
    const [showSoftSkills, setShowSoftSkills] = useState(false);

    // Toggle function for soft skills
    const toggleSoftSkills = () => setShowSoftSkills(!showSoftSkills);

    return (
        <div className="skills-section">
            {/* Technical Skills Section */}
            <motion.h3 
                className="main-title"
                onClick={toggleTechnicalSkills}
                style={{ cursor: "pointer", textDecoration: "underline" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1}}
                transition={{delay: 0.9, duration: 1}}
            >
                Technical Skills
            </motion.h3>
            {showTechnicalSkills && (
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={progressBarVariants}
                    className="skills-list"
                >
                    {technicalSkills.map((skill, index) => (
                        <motion.li
                            key={index}
                            className="skill-item"
                            variants={childVariants}
                            style={{ fontSize: "1.2rem" }} // Increased font size
                        >
                            <p className="skill-title" style={{ fontSize: "1.2rem" }}>{skill.title}</p> {/* Increased font size */}
                            <div className="progress-bar">
                                <motion.div
                                    className="progress"
                                    style={{ width: skill.progress }}
                                    initial={{ width: 0 }}
                                    animate={{ width: skill.progress }}
                                    transition={{ duration: 1 }}
                                ></motion.div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            )}

            {/* Soft Skills Section */}
            <motion.h3 
                className="main-title"
                onClick={toggleSoftSkills}
                style={{ cursor: "pointer", textDecoration: "underline" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1}}
                transition={{delay: 1.1, duration: 1}}
            >
                Soft Skills
            </motion.h3>
            {showSoftSkills && (
                <motion.div
                className="soft-skills"
                initial="hidden"
                animate="visible"
                variants={progressBarVariants}
            >
                {softSkills.map((skill, index) => (
                    <motion.div className="skill" key={index} variants={childVariants}>
                        {skill}
                    </motion.div>
                ))}
            </motion.div>
            )}
        </div>
    );
};

export default Skills;