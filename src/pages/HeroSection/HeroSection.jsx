import React, { useEffect, useState } from 'react'
import sergePhoto from '../../assets/images/sergePhoto.jpg'
import classes from './HeroSection.module.sass'

export const HeroSection = () => {
  const [isOpenedInfo, setIsOpenedInfo] = useState(false)

  useEffect(() => {
    if (isOpenedInfo) return;
    const timeOut = setTimeout(() => {
      setIsOpenedInfo(true);
    }, 1000)


  }, [])

  return (
    <>
      <div className={classes.heroTitle}>Front-End Developer</div>
      <div className={classes.heroContainer}>
        <div className={classes.heroInfo}>
          <div className={`${classes.leftInfoCard} ${isOpenedInfo ? classes.slideLeft : ''}`}></div>
          <img className={`${classes.sergeImage} ${isOpenedInfo ? classes.fadeIn : ''}`} src={sergePhoto} alt='Serhii Kozhyn' />
          <div className={`${classes.rightInfoCard} ${isOpenedInfo ? classes.slideRight : ''}`}></div>
        </div>
      </div>
    </>

  )
}
