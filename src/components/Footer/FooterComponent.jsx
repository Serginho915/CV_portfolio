import React, { useState, useEffect } from 'react'
import classes from './FooterComponent.module.sass'
import nightTheme from '../../assets/images/nightTheme.svg'
import dayTheme from '../../assets/images/dayTheme.svg'
import serhiikozh from '../../assets/images/SERHIIKOZH.svg';

export const FooterComponent = () => {
  const [theme, setTheme] = useState('dark');
  const [animProgress, setAnimProgress] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  const themeBlocks = [...Array(10)];

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme === 'light' ? 'light-theme' : '';
  }, []);

  const handleThemeToggle = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    let currentStep = 0;

    const interval = setInterval(() => {
      setAnimProgress(currentStep);
      currentStep++;

      if (currentStep > 9) {
        clearInterval(interval);
        setTimeout(() => {
          const newTheme = theme === 'dark' ? 'light' : 'dark';
          setTheme(newTheme);
          localStorage.setItem('app-theme', newTheme);
          document.documentElement.className = newTheme === 'light' ? 'light-theme' : '';
          setAnimProgress(-1);
          setIsAnimating(false);
        }, 200);
      }
    }, 100);
  };

  return (
    <footer className={classes.footer}>
      <button
        className={classes.themeButton}
        onClick={handleThemeToggle}
        disabled={isAnimating}
      >
        <ul className={classes.themeList}>
          {themeBlocks.map((_, index) => (
            <li
              key={index}
              className={`${classes.themeBlock} ${index <= animProgress ? classes.activeBlock : ''}`}
            />
          ))}
        </ul>
        <img
          src={theme === 'dark' ? nightTheme : dayTheme}
          alt="Theme toggle"
          className={classes.themeIcon}
        />
      </button>
      <div className={classes.footerNav}>
        <ul className={classes.footerNavList}>
          <li><a href="https://www.linkedin.com/in/serhii-kozhyn/" target="_blank" rel="noopener noreferrer" className={`${classes.link} ${classes['icon-linkedin']}`}></a></li>
          <li><a href="https://github.com/Serginho915" target="_blank" rel="noopener noreferrer" className={`${classes.link} ${classes['icon-github']}`}></a></li>
          <li><a href="mailto:serginho915@gmail.com" className={`${classes.link} ${classes.contact}`}>Contact</a></li>
        </ul>

      </div>
      <div className={classes.footerInfo}>
        <p className={classes.statusText}>Status: <span className={classes.statusAvailable}>Available</span></p>
        <img src={serhiikozh} alt="Serhiy Kozhyn" className={classes.profileImage} />
      </div>
    </footer>
  )
}

