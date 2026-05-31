import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const experiences = [
        {
            title: 'Peer Tutor',
            company: 'Knack Tutoring — Georgia Tech',
            location: 'Atlanta, GA',
            period: 'Feb. 2026 – Present',
            responsibilities: [
                'Maintained a 4.96-star rating across 30+ sessions with 15 students, accumulating 38 hours of instruction in Computer Science and Calculus II.',
                'Qualified to tutor 7 courses across multiple disciplines, demonstrating consistent subject mastery and strong academic performance.',
                'Designed student-centered explanations of complex technical concepts, adapting teaching strategies to individual learning needs.'
            ]
        },
        {
            title: 'Teaching Assistant',
            company: 'Georgia Institute of Technology',
            location: 'Atlanta, GA',
            period: '2026 – Present',
            responsibilities: [
                'Supporting students in Intro to Computing, helping bridge foundational concepts in programming and computational thinking.',
                'Facilitating a collaborative and approachable learning environment for incoming CS students.'
            ]
        },
        {
            title: 'Team Member',
            company: 'Gusto',
            location: 'Atlanta, GA',
            period: 'May – Aug. 2025',
            responsibilities: [
                'Performed reliably in a high-volume environment, completing orders accurately and on time during peak hours with minimal supervision.',
                'Coordinated inventory and workflow across line, grill, prep, and drive-thru stations, improving cross-station communication and reducing delays.'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">03 — Experience</div>
                    <h2 className="section-title">Work History</h2>
                </motion.div>

                <div className="experience-timeline">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="experience-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div className="experience-body">
                                <div className="experience-eyebrow">{exp.company}</div>
                                <h3 className="experience-title">{exp.title}</h3>
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
                                    {exp.responsibilities.map((r, j) => (
                                        <motion.li
                                            key={j}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.4, delay: i * 0.15 + j * 0.1 + 0.2 }}
                                        >
                                            {r}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
