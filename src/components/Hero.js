import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaChevronDown } from 'react-icons/fa';
import profileImage from './Profile Picture.jpg';

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="gradient-overlay"></div>
                <div className="floating-shapes">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="floating-shape"
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 15, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="hero-content">
                <motion.div
                    className="hero-image-container"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="image-border"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <img src={profileImage} alt="James Armendariz" className="hero-image" />
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Hi, I'm <span className="gradient-text">James Armendariz</span>
                </motion.h1>

                <motion.div
                    className="hero-subtitle-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h2 className="hero-subtitle">
                        Computer Science Student
                    </h2>
                    <p className="hero-tagline">
                        Passionate about AI & Cybersecurity
                    </p>
                </motion.div>

                <motion.div
                    className="hero-social"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <motion.a
                        href="https://github.com/james-armendariz"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/james-armendariz-b04a92220"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/james_armendariz"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaInstagram />
                    </motion.a>
                </motion.div>

                <motion.button
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToAbout}
                >
                    Explore My Work
                </motion.button>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.2, duration: 0.5 },
                    y: { repeat: Infinity, duration: 1.5 }
                }}
                onClick={scrollToAbout}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;

