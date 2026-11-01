import React from 'react';
import { MaskHeading, Up } from './motion';

const now = [
    { big: 'Rinse', small: 'Co-founding a multi-tenant SaaS for mobile detailers' },
    { big: '600+', small: 'Students I support as a Georgia Tech teaching assistant' },
    { big: '4.98', small: 'Star rating across 53 reviews as a peer tutor' },
    { big: 'May 2028', small: 'Graduating, with a 3.52 GPA so far' }
];

const Intro = () => (
    <section className="intro field-black">
        <div className="intro__text">
            <MaskHeading className="heading">From the socket up</MaskHeading>
            <Up as="p" className="intro__lead" delay={0.08}>
                I study computer science at Georgia Tech, concentrating in Cybersecurity &amp; Privacy
                and Systems &amp; Architecture.
            </Up>
            <Up as="p" delay={0.16}>
                I like knowing what happens underneath. It is how a Python packet sniffer ended up with
                its hot path rewritten as a CPython extension, and why the tenant rules in Rinse live in
                the database as well as in the routes.
            </Up>
            <Up as="p" delay={0.24}>
                I'm looking for internships and co-ops in cybersecurity, AI, or systems and architecture.
            </Up>
        </div>

        <ul className="intro__now">
            {now.map((item, i) => (
                <Up as="li" key={item.big} delay={i * 0.08} y={32}>
                    <strong>{item.big}</strong>
                    <span>{item.small}</span>
                </Up>
            ))}
        </ul>
    </section>
);

export default Intro;
