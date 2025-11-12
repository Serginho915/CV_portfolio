import React from 'react'
import roboticImage from '../../assets/images/roboticImage.png';
import classes from './GreetingRobot.module.sass'

export const GreetingRobot = () => {
    return (
        <div className={classes.interactionWrapper}>
            <div className={classes.greetingTextBlock}>
                <p className={classes.greetingText}>Welcome on board! Your vitals suggest a break.</p>
                <p className={classes.greetingText} style={{fontWeight :'600'}}> What can I serve to enhance your efficiency?</p>
            </div>
            <img src={roboticImage} alt="roboticImage" />
        </div>
    )
}
