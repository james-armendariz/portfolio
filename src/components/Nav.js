import React, { useEffect, useRef, useState } from 'react';

const items = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
];

const Nav = () => {
    const [hidden, setHidden] = useState(false);
    const last = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setHidden(y > last.current && y > 120);
            last.current = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`nav ${hidden ? 'nav--hidden' : ''}`} aria-label="Main">
            <a className="nav__home" href="#top">JA</a>
            <ul>
                {items.map((item) => (
                    <li key={item.href}>
                        <a href={item.href}><span data-text={item.label}>{item.label}</span></a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
