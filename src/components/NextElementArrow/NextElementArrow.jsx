import React from 'react'
import classes from './NextElementArrow.module.sass'

export const NextElementArrow = ({ className }) => {
  return (
    <div className={`${classes.arrow} ${className}`}></div>
  )
}
