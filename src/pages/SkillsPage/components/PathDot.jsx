import React from 'react';
import { motion } from "motion/react";
import classes from '../SkillsPage.module.sass';

export const PathDot = ({ style, delay, hitTime, animDuration }) => (
    <motion.div
        className={classes.dot}
        style={style}
        animate={{ opacity: [1, 0.2, 0, 0] }}
        transition={{
            duration: animDuration,
            times: [0, hitTime, hitTime, 1],
            repeat: Infinity,
            repeatDelay: animDuration * 2,
            delay: delay,
            ease: "linear"
        }}
    />
);
