import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaGithub, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const Contact = () => {
    return (
        <div className="contact-info">
            <motion.h3 className="main-title" initial={{ scale: 0 }} animate={{ scale: 1}} transition={{delay: 1.3, duration: 1}}>Contact Info</motion.h3>
            <ul>
                <li><FaPhone className = "icon"/>678-908-7223</li>
                <li><FaEnvelope className = "icon"/> jamesarmenda1128@gmail.com</li>
                <li><FaGlobe className = "icon"/>
                    <a href="https://www.linkedin.com/in/james-armendariz-b04a92220" target="_blank" rel="noopener noreferrer" className="custom-link">linkedin.com/in/james-armendariz</a>
                </li>
                <li><FaGithub className = "icon"/>
                    <a href="https://github.com/james-armendariz" target="_blank" rel="noopener noreferrer" className = "custom-link">github.com/james-armendariz</a>
                </li>
                <li><FaInstagram className = "icon"/> @james_armendariz</li>
                <li><FaMapMarkerAlt className = "icon"/> 3920 Bogan Mill Rd</li>
            </ul>
        </div>
    );
}

export default Contact;
