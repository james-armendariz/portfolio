import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';

export const ease = [0.16, 1, 0.3, 1];
const once = { once: true, margin: '0px 0px -8% 0px' };

// Rises into place once. The manner varies per section through y and delay.
export const Up = ({ as = 'div', delay = 0, y = 24, children, ...props }) => {
    const Tag = motion[as];
    return (
        <Tag
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={once}
            transition={{ duration: 0.8, ease, delay }}
            {...props}
        >
            {children}
        </Tag>
    );
};

// A heading that climbs out of a mask. Watches the heading itself: the clipped span inside
// it never intersects the viewport, so observing that would leave it hidden for good.
export const MaskHeading = ({ as: Heading = 'h2', className = '', children, delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <Heading className={`mask ${className}`} ref={ref}>
            <motion.span
                className="mask__in"
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : { y: '105%' }}
                transition={{ duration: 1, ease, delay }}
            >
                {children}
            </motion.span>
        </Heading>
    );
};

// Sizes text so it runs the full width of its box, and again once the real font arrives.
export const fitOnFont = (fit) => {
    fit();
    window.addEventListener('resize', fit);
    document.fonts?.load('900 100px "Libre Franklin"').then(fit);
    document.fonts?.ready.then(fit);
    return () => window.removeEventListener('resize', fit);
};

// Counts up to a real figure the first time it is seen.
export const Count = ({ to, prefix = '', suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const reduced = useReducedMotion();
    const [value, setValue] = useState(reduced ? to : 0);

    useEffect(() => {
        if (!inView || reduced) return undefined;
        const controls = animate(0, to, {
            duration: 1.4,
            ease,
            onUpdate: (v) => setValue(Math.round(v))
        });
        return () => controls.stop();
    }, [inView, to, reduced]);

    return <span ref={ref} className="tnum">{prefix}{value.toLocaleString('en-US')}{suffix}</span>;
};
