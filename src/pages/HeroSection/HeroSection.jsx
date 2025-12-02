import React, { useEffect, useState } from 'react'
import classes from './HeroSection.module.sass'

export const HeroSection = () => {
const [isOpenedInfo,setIsOpenedInfo] = useState(false)

useEffect(() =>{
  if(isOpenedInfo) return;


},[])

  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroTitle}>Front-End Developer</div>
      <div className={classes.heroInfo}>
        <div className={classes.leftInfoCard}></div>
        {isOpenedInfo? <div className={classes.sergeImage}></div> : null}
        <div className={classes.rightInfoCard}></div>
      </div>
    </div>
  )
}
