import React from 'react';
import { motion } from 'framer-motion';
import { links } from '../data';
import { ease } from './motion';

const rows = [
    { text: links.email, href: `mailto:${links.email}?subject=Hello%20James`, small: true },
    { text: links.phone, href: `tel:${links.phone.replace(/-/g, '')}` },
    { text: 'GitHub', href: links.github, external: true },
    { text: 'LinkedIn', href: links.linkedin, external: true },
    { text: 'Instagram', href: links.instagram, external: true }
];

const Contact = () => (
    <section id="contact" className="contact field-white">
        <h2 className="contact__title">Say hello</h2>
        <p className="contact__say">
            Open to internships, co-ops, research, and people building interesting things.
        </p>
        <ul className="contact__rows">
            {rows.map((row, i) => (
                <motion.li
                    key={row.text}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -5% 0px' }}
                    transition={{ duration: 0.8, ease, delay: i * 0.07 }}
                >
                    <a
                        href={row.href}
                        className={row.small ? 'contact__email' : ''}
                        {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                        <span>{row.text}</span>
                    </a>
                </motion.li>
            ))}
        </ul>
    </section>
);

export default Contact;
