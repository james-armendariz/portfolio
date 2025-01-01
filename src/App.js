import React, {useEffect} from 'react';
import './App.css'; // Global CSS

// Left Section Imports
import Profile from './components/Left-Section/Profile';
import Skills from './components/Left-Section/Skills';
import Contact from './components/Left-Section/Contact';
import References from './components/Left-Section/References';

// Right Section Imports
import About from './components/Right-Section/About';
import Projects from './components/Right-Section/Projects';
import Education from './components/Right-Section/Education';
import Leadership from './components/Right-Section/Leadership';

const App = () => {
    document.addEventListener('DOMContentLoaded', () => {
        window.scrollTo(0, -document.body.getBoundingClientRect().top);
    });

    return (
        <main className="main-content">
            <section className="left-section">
                <div className="left-content">
                    <Profile />
                    <Skills />
                    <Contact />
                    <References />
                </div>
            </section>

            <section className="right-section">
                <div class="right-content">
                    <About />
                    <Projects />
                    <Education />
                    <Leadership />
                </div>
            </section>
        </main>
    );
}

export default App;