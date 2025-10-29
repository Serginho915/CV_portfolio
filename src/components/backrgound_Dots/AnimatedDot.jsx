import React from 'react';
import classes from './AnimatedDot.module.sass';

export const AnimatedDot = ({ top, left, size, color, blur, animation }) => {
  const style = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    filter: `blur(${blur}px)`,
  };

  return (
    <div 
      className={`${classes.animatedDot} ${classes[animation]}`}
      style={style}
    />
  );
};