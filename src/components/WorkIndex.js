import React from 'react';
import { motion } from 'framer-motion';
import { workIndex } from '../data';
import { ease } from './motion';
import rinse from '../assets/work/rinse.jpg';
import nova from '../assets/work/nova.jpg';
import locallaunch from '../assets/work/locallaunch.jpg';
import ngcc from '../assets/work/ngcc.jpg';
import hiremap from '../assets/work/hiremap.jpg';

const pictures = { rinse, nova, locallaunch, ngcc, hiremap };

const WorkIndex = () => (
    <section id="work" className="work field-white">
        <ul className="work__names">
            <li className="work__title"><h2>Selected work:</h2></li>
            {workIndex.map((item, i) => (
                <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -6% 0px' }}
                    transition={{ duration: 0.7, ease, delay: i * 0.05 }}
                >
                    <a href={item.href}>
                        <span className="work__name">{item.name}</span>
                        {item.picture && (
                            <span className="work__frame"><img src={pictures[item.picture]} alt="" loading="lazy" width="150" height="100" /></span>
                        )}
                    </a>
                    {i < workIndex.length - 1 ? ',' : '.'}
                </motion.li>
            ))}
        </ul>
        <p className="work__count">Twelve projects, from 2023 to this week.</p>
    </section>
);

export default WorkIndex;
