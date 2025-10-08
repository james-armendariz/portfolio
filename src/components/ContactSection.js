import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactInfo = [
        { icon: <FaPhone />, label: "Phone", value: "678-908-7223", href: "tel:6789087223" },
        { icon: <FaEnvelope />, label: "Email", value: "jamesarmenda1128@gmail.com", href: "mailto:jamesarmenda1128@gmail.com" },
        { icon: <FaMapMarkerAlt />, label: "Address", value: "3920 Bogan Mill Rd", href: null }
    ];

    const socialLinks = [
        { icon: <FaGithub />, label: "GitHub", href: "https://github.com/james-armendariz", color: "#333" },
        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/james-armendariz-b04a92220", color: "#0077b5" },
        { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/james_armendariz", color: "#E4405F" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">
                        I'm always open to discussing new opportunities, projects, or just connecting!
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info-cards"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                className="contact-card"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="contact-icon">{item.icon}</div>
                                <h4>{item.label}</h4>
                                {item.href ? (
                                    <a href={item.href}>{item.value}</a>
                                ) : (
                                    <p>{item.value}</p>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="social-links-section"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3>Connect With Me</h3>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    style={{ '--hover-color': link.color }}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="references-section"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3>References</h3>
                        <div className="reference-card">
                            <div className="reference-icon">👨‍🏫</div>
                            <div className="reference-info">
                                <h4>Dr. Aibek Musaev</h4>
                                <p className="reference-title">Computer Science Professor</p>
                                <a href="mailto:aibek.musaev@gatech.edu" className="reference-email">
                                    <FaEnvelope /> aibek.musaev@gatech.edu
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="footer"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <p>&copy; 2024 James Armendariz. Built with React & Framer Motion</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

