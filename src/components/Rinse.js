import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Count, MaskHeading, Up } from './motion';
import picture from '../assets/work/rinse.jpg';

const figures = [
    { to: 100, label: 'PocketBase collections under tenant rules' },
    { to: 191, label: 'Next.js API routes behind route auth' },
    { to: 190, prefix: '~', label: 'Vitest cases in the verification suite' },
    { to: 9, label: 'Verification phases, gated on every push' }
];

const notes = [
    {
        title: 'Tenants that cannot meet',
        body: 'Organization isolation is enforced twice, at the database rules and at route auth. The suite covers cross-tenant denial, a full authorization matrix over every permission level, and unprovisioned users.'
    },
    {
        title: 'Payments, end to end',
        body: 'Stripe Checkout and Billing Portal for subscriptions, Stripe Connect for operator payouts and refunds, Apple In-App Purchase, and signature-verified, deduplicated webhooks that reconcile plan state on the server.'
    },
    {
        title: 'One answer for money',
        body: 'All money, invoicing and P&L math lives in @rinse/core in integer cents. Parity tests run the same fixtures through the CRM, the app and the API to prove all three report the same revenue and profit.'
    }
];

const Rinse = () => {
    const stage = useRef(null);
    const { scrollYProgress } = useScroll({ target: stage, offset: ['start 0.9', 'center 0.7'] });
    const wiped = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clipPath = useTransform(wiped, (v) => `inset(0 ${v}% 0 0)`);
    const bladeX = useTransform(wiped, (v) => `${100 - v}%`);

    return (
        <section id="rinse" className="rinse field-gold">
            <div className="rinse__head">
                <MaskHeading className="monument">Rinse</MaskHeading>
                <Up className="rinse__say" delay={0.15}>
                    <p>
                        The scheduling, invoicing and booking system for mobile detailers. An iOS and
                        Android operator app, a web CRM and a customer booking portal, all sharing one
                        TypeScript core. I co-founded it in September 2026 and we're still building.
                    </p>
                    <a className="button button--ink" href="https://rinsehq.com" target="_blank" rel="noopener noreferrer">Visit rinsehq.com</a>
                </Up>
            </div>

            {/* The picture gets squeegeed clean as it scrolls in. */}
            <div className="rinse__stage" ref={stage}>
                <motion.img style={{ clipPath }} src={picture} alt="The Rinse homepage, showing the Rinse Desk dashboard with revenue, invoices and job status." loading="lazy" width="1560" height="1000" />
                <motion.span className="rinse__blade" style={{ left: bladeX }} aria-hidden="true" />
            </div>

            <ul className="rinse__figures">
                {figures.map((figure, i) => (
                    <Up as="li" key={figure.label} delay={i * 0.07}>
                        <strong><Count to={figure.to} prefix={figure.prefix} /></strong>
                        <span>{figure.label}</span>
                    </Up>
                ))}
            </ul>

            <div className="rinse__notes">
                {notes.map((note, i) => (
                    <Up key={note.title} delay={i * 0.08}>
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                    </Up>
                ))}
            </div>
        </section>
    );
};

export default Rinse;
