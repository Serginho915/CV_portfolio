import React from 'react';
import { motion } from "motion/react";
import classes from '../SkillsPage.module.sass';

export const Marquee = ({ text }) => (
    <div className={classes.marqueeContainer}>
        <motion.div
            className={classes.marqueeContent}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            {[...Array(10)].map((_, i) => (
                <span key={i} className={classes.marqueeText}>{text}</span>
            ))}
        </motion.div>
    </div>
);
