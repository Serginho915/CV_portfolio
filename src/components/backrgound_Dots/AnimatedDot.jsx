import React from 'react';
import classes from './AnimatedDot.module.sass';

export const AnimatedDot = ({ top, left, size, color, blur, animation, toCenter, onAnimationEnd }) => {
  const [shouldMove, setShouldMove] = React.useState(false);
  
  React.useEffect(() => {
    if (toCenter) {
      // Небольшая задержка чтобы браузер успел применить начальные стили
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShouldMove(true);
        });
      });
    }
  }, [toCenter]);

  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  
  const translateX = centerX - left - size / 2;
  const translateY = centerY - top - size / 2;

  const style = {
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    filter: `blur(${blur}px)`,
    transition: shouldMove ? 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
    transform: shouldMove ? `translate(${translateX}px, ${translateY}px) scale(0.5)` : 'translate(0, 0) scale(1)',
    opacity: shouldMove ? 0 : 1,
  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName === 'opacity' && shouldMove) {
      onAnimationEnd?.();
    }
  };

  return (
    <div 
      className={!toCenter ? classes[animation] : ''}
      style={style}
      onTransitionEnd={handleTransitionEnd}
    />
  );
};