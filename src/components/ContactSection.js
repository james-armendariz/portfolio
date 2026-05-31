import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaUser } from 'react-icons/fa';

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const contactInfo = [
        { icon: <FaPhone />, label: 'Phone', value: '678-908-7223', href: 'tel:6789087223' },
        { icon: <FaEnvelope />, label: 'Email', value: 'jamesarmenda1128@gmail.com', href: 'mailto:jamesarmenda1128@gmail.com' }
    ];

    const socialLinks = [
        { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/james-armendariz' },
        { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/james-armendariz-b04a92220' },
        { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/james_armendariz' }
    ];

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">07 — Contact</div>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-description">
                        Open to internships, co-ops, research opportunities, and connecting with people building interesting things.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info-cards"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                className="contact-card"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="contact-icon">{item.icon}</div>
                                <h4>{item.label}</h4>
                                <a href={item.href}>{item.value}</a>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="social-links-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3>Connect</h3>
                        <div className="social-links">
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.97 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    
                </div>

                <motion.div
                    className="footer"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p>&copy; 2025 James Armendariz — Built with React &amp; Framer Motion</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
