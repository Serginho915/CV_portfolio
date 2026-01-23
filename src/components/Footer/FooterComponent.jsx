import React from 'react'
import classes from './FooterComponent.module.sass'
import nightTheme from '../../assets/images/nightTheme.svg'
import serhiikozh from '../../assets/images/SERHIIKOZH.svg';

export const FooterComponent = () => {
  const themeBlocks = [...Array(10)];
  return (
    <footer className={classes.footer}>
      <button className={classes.themeButton}>
        <ul className={classes.themeList}>
          {themeBlocks.map((_, index) => (
            <li key={index} className={classes.themeBlock} />
          ))}
        </ul>
        <img src={nightTheme} alt="Theme toggle" className={classes.themeIcon} />
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

