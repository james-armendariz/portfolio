import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaChevronDown } from 'react-icons/fa';
import profileImage from './Profile Picture.jpg';

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="gradient-overlay"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    className="hero-image-container"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="image-border"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    />
                    <img src={profileImage} alt="James Armendariz" className="hero-image" />
                </motion.div>

                <motion.div
                    className="hero-eyebrow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Georgia Institute of Technology
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                >
                    James <span className="gradient-text">Armendariz</span>
                </motion.h1>

                <motion.div
                    className="hero-subtitle-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h2 className="hero-subtitle">Computer Science Student</h2>
                    <p className="hero-tagline">Systems & Architecture · Cybersecurity & Privacy</p>
                </motion.div>

                <motion.div
                    className="hero-social"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65, duration: 0.8 }}
                >
                    <motion.a href="https://github.com/james-armendariz" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                        <FaGithub />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/james-armendariz-b04a92220" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                        <FaLinkedin />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/james_armendariz" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                        <FaInstagram />
                    </motion.a>
                </motion.div>

                <motion.button
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToAbout}
                >
                    View My Work
                </motion.button>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, y: [0, 8, 0] }}
                transition={{
                    opacity: { delay: 1.2, duration: 0.5 },
                    y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' }
                }}
                onClick={scrollToAbout}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
