import React from 'react';
import classes from './AnimatedDot.module.sass';

export const AnimatedDot = ({ top, left, size, color, blur, animation, toCenter }) => {
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
      className={`${classes.animatedDot} ${classes[animation]} ${toCenter ? classes.moveToCenter : ''}`}
      style={style}
    />
  );
};