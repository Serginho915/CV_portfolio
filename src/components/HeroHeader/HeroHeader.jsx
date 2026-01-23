import React from 'react'
import { NextElementArrow } from '../NextElementArrow/NextElementArrow.jsx'
import classes from './HeroHeader.module.sass'

export const HeroHeader = () => {
  return (
    <header className={classes.heroHeader}>
      <div className={classes.heroInfoTitle}>
        <h1 className={classes.heroTitle}>Front-End Developer</h1>
        <h3 className={classes.heroSubTitle}>[ code operative ]</h3>
      </div>

      <a href="/SerhiiKozhyn_Resume.pdf" download className={classes.cvButtonBlock}>
        <span className={classes.cvSpan}>Resume file</span>
        <button className={classes.cvButton}></button>
      </a>

      <div className={classes.nextButton}>
        <NextElementArrow />
        <p className={classes.nextButtonText}>Explore the Universe </p>
      </div>
    </header>
  )
}


