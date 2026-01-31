import React from 'react'
import sergePhoto from '../../assets/images/SergePhoto.jpg'
import classes from './HeroImage.module.sass'

export const HeroImage = ({ isOpenedInfo }) => {
  return (
    <figure className={classes.imageWrapper}>
      <img
        className={`${classes.sergeImage} ${isOpenedInfo ? classes.fadeIn : ''}`}
        src={sergePhoto}
        alt='Serhii Kozhyn - Front-End Developer'
      />
    </figure>
  )
}


