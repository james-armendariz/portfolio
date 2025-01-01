import React from 'react';
import profileImage from './Profile Picture.jpg';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <motion.div className="profile">
            <div className="profile-image-container">
                <motion.img
                    src={profileImage}
                    alt="James Armendariz - Profile Picture"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 3 }}
                    className="profile-image"
                />
            </div>
            <motion.h2
                className="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                James Armendariz
            </motion.h2>
            <motion.p
                className="career"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
            >
                Student
            </motion.p>
        </motion.div>
    );
};

export default Profile;
