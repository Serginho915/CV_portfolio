import React from 'react';
import classes from './BackElementArrow.module.sass';

export const BackElementArrow = ({ className }) => {
    return (
        <div className={`${classes.arrow} ${className}`}></div>
    );
};
