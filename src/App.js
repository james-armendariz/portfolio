import React from 'react';
import { MotionConfig } from 'framer-motion';
import './App.css';

import Nav from './components/Nav';
import CursorRing from './components/CursorRing';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WorkIndex from './components/WorkIndex';
import Rinse from './components/Rinse';
import Sniffer from './components/Sniffer';
import Blimp from './components/Blimp';
import MoreWork from './components/MoreWork';
import About from './components/About';
import LineUp from './components/LineUp';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
    <MotionConfig reducedMotion="user">
        <Nav />
        <CursorRing />
        <main className="page">
            <Hero />
            <Intro />
            <WorkIndex />
            <Rinse />
            <Sniffer />
            <Blimp />
            <MoreWork />
            <About />
            <LineUp />
            <Contact />
        </main>
        <Footer />
    </MotionConfig>
);

export default App;
