import React from 'react';
import classes from './SkillCard.module.sass';

export const SkillCard = ({ children, iconSrc, altText, name }) => {
    return (
        <div className={classes.skillCard}>
            <div className={classes.cardShape}>
                <div className={classes.skillName}>{name}</div>
                {iconSrc ? (
                    <img src={iconSrc} alt={altText || 'Skill icon'} className={classes.icon} />
                ) : (
                    <div className={classes.icon}>{children}</div>
                )}
            </div>
        </div>
    );
};
