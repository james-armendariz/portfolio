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
            location: 'Atlanta, GA (Hybrid)',
            period: 'Feb. 2026 – Present',
            responsibilities: [
                'Maintained a 4.96-star rating across 25 reviews while delivering 34 sessions and 39 hours of instruction to 16 Georgia Tech students.',
                'Tutor Georgia Tech students in Introduction to Computing and Computer Organization & Programming, with occasional support in Calculus II — qualified across 7 courses through demonstrated subject mastery.',
                'Designed student-centered explanations of complex technical concepts, adapting teaching strategies to individual learning needs to improve comprehension.'
            ]
        },
        {
            title: 'Teaching Assistant',
            company: 'Georgia Institute of Technology',
            location: 'Atlanta, GA',
            period: 'May – Aug. 2026',
            responsibilities: [
                'Moderated the primary technical support forum (Ed Discussion) for 300+ students, including undergraduate, graduate, and high school dual-enrollment participants.',
                'Guided students through foundational programming concepts — introductory object-oriented programming in Python, recursion, I/O, conditionals, loops, and string manipulation — via virtual help desk sessions to build problem-solving skills.'
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
