import React from 'react';
import { AnimatedDot } from './AnimatedDot';
import classes from './BackgroundDots.module.sass';

const DOTS_CONFIG = [
    { top: 613, left: 171, size: 12, color: 'var(--accent-color)', blur: 2, animation: 'cyanDot' },
    { top: 234, left: 1184, size: 8, color: 'var(--accent-color)', blur: 1, animation: 'blueDot' },
    { top: 88, left: 306, size: 8, color: 'var(--accent-color)', blur: 4, animation: 'whiteDot' },
    { top: 159, left: 1279, size: 5, color: 'var(--accent-color)', blur: 3, animation: 'neutralDot' },
    { top: 184, left: 1115, size: 3, color: 'var(--accent-color)', blur: 3, animation: 'grayDot' },
    { top: 230, left: 757, size: 5, color: 'var(--accent-color)', blur: 3, animation: 'purpleDot' },
    { top: 630, left: 896, size: 8, color: '#bbadadff', blur: 3, animation: 'neutralDot' }
];

export const BackgroundDots = ({ finished = false, onDotAnimationEnd }) => {
    return (
        <div className={classes.dotsWrapper}>
            {DOTS_CONFIG.map((dotProps, index) => (
                <AnimatedDot
                    key={`dot-${index}`}
                    {...dotProps}
                    toCenter={finished}
                    onAnimationEnd={onDotAnimationEnd}
                />
            ))}
        </div>
    );
};
