import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaReact, FaServer, FaRobot } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const projects = [
        {
            title: 'EduAlign',
            subtitle: 'College Discovery Platform',
            date: 'Feb. 2026',
            role: 'Full-Stack Developer',
            description: 'Built a full-stack platform (React/TypeScript + Vite, FastAPI/SQLAlchemy, PostgreSQL) with 48 REST endpoints and 8 relational models powering user profiles, saved lists, alumni reviews, and admin analytics. Developed a data pipeline (Pandas, scikit-learn) that cleaned and merged College Scorecard data (6,400+ institutions, 3,300+ raw fields) with 18,600+ alumni ratings into a normalized 3,700-institution matching dataset. Implemented a hybrid matching engine blending weighted cosine similarity (80%) with profile affinity scoring (20%), paired with LLM-generated explanations and a deterministic fallback. Added a financial planner module with 4 engines for cost/ROI analysis, loan simulation, budget tracking, and alternative school comparison.',
            icon: <FaReact />,
            tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'scikit-learn']
        },
        {
            title: 'Hire Map',
            subtitle: 'Job Search Web Application',
            date: 'Aug. – Dec. 2025',
            role: 'Full-Stack Developer (Scrum Team)',
            description: 'Collaborated in a 6-person Scrum team across 3 sprints and 144 commits to deliver a full-stack Django application with role-based workflows, Leaflet-powered map-based job search, and real-time client-side radius filtering. Built a 5-stage drag-and-drop Kanban application tracker backed by a REST API, applying SOLID/GRASP design principles through reusable role-based decorators and iterative schema refactoring across 30 migrations.',
            icon: <SiDjango />,
            tags: ['Django', 'Python', 'JavaScript', 'Scrum / Agile', 'SOLID']
        },
        {
            title: 'Autonomous Blimp',
            subtitle: 'ROS 2 State Machine — VIP Research',
            date: 'Jan. 2026 – Present',
            role: 'Research Developer',
            description: 'Developed and tested a 9-state, 13-transition finite state machine in ROS 2 (C++) for an autonomous blimp platform, including a mock vision publisher in Python to simulate sensor input for hardware-free testing. Implemented 3 keyboard-triggered test commands mapped to named threshold constants mirrored from the main control header (e.g., BALL_CATCH_TRIGGER, GOAL_SCORE_TRIGGER), enabling repeatable integration tests across all 9 autonomous states.',
            icon: <FaRobot />,
            tags: ['ROS 2', 'Python', 'C++', 'State Machines', 'Robotics']
        },
        {
            title: 'Data-Driven Circuitry',
            subtitle: 'Predictive Modeling & Analysis',
            date: 'Oct. 2023',
            role: 'Student Developer',
            description: 'Integrated hardware circuitry with Python to collect and process real-time sensor data, exporting structured results to Google Sheets for downstream analysis. Applied regression models to forecast trends from observed sensor data, building foundational skills in data manipulation and visualization.',
            icon: <FaPython />,
            tags: ['Python', 'Pandas', 'Matplotlib', 'Regression', 'IoT']
        }
    ];

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">04 — Projects</div>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-description">
                        A selection of projects spanning full-stack development, machine learning, robotics, and data analysis.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                        >
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-date">{project.date}</div>
                            </div>
                            <div className="project-body">
                                <div className="project-subtitle">{project.subtitle}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-role">{project.role}</p>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
