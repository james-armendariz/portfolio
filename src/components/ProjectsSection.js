import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaReact, FaChartLine } from 'react-icons/fa';

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "Data-Driven Circuitry",
            subtitle: "Predictive Modeling & Analysis",
            date: "October 2023",
            role: "Student Developer, Applications of AI",
            description: "Integrated circuitry with Python to collect and analyze real-time data, utilizing libraries such as Pandas, Matplotlib, and regression models for predictive insights. Data captured from circuitry components was processed and formatted into Google Sheets, where regression models generated forecasts based on observed trends.",
            icon: <FaPython />,
            tags: ["Python", "Data Analysis", "Machine Learning", "IoT"],
            color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "Interactive Digital Portfolio",
            subtitle: "Personal Project",
            date: "October 2024",
            role: "Student Developer",
            description: "Created an engaging, interactive portfolio by transitioning from traditional HTML to React, learning its component-based structure to enhance both functionality and maintainability. Implemented dynamic animations and interactive elements using JavaScript and Framer Motion.",
            icon: <FaReact />,
            tags: ["React", "JavaScript", "Framer Motion", "CSS"],
            color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">
                        Here are some of my recent projects showcasing my skills and passion for technology
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="project-header" style={{ background: project.color }}>
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-date">{project.date}</div>
                            </div>

                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <h4 className="project-subtitle">{project.subtitle}</h4>
                                <p className="project-role">{project.role}</p>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                className="project-overlay"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <motion.button
                                    className="view-project-btn"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaChartLine /> View Details
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;

