import React, { useEffect } from 'react';
import './App.css';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import LeadershipSection from './components/LeadershipSection';
import ContactSection from './components/ContactSection';

const App = () => {
    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Start at top on load
        window.scrollTo(0, 0);

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <LeadershipSection />
            <ContactSection />
        </div>
    );
};

export default App;
