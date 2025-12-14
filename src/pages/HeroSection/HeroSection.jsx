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
          {/* Left Card - Identity Info + Knowledge Core */}
          <div className={`${classes.leftInfoCard} ${isOpenedInfo ? classes.slideLeft : ''}`}>
            <div className={classes.cardHeader}>
              <h3>Identity Info:</h3>
            </div>
            <div className={classes.cardContent}>
              <div className={classes.infoRow}>
                <svg className={classes.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <p className={classes.infoText}>Kozhyn, Serhii</p>
              </div>
              <div className={classes.infoRow}>
                <svg className={classes.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p className={classes.infoText}>Cardiff, UK</p>
              </div>
            </div>

            <div className={classes.cardHeader} style={{marginTop: '20px'}}>
              <h3>Knowledge Core:</h3>
            </div>
            <div className={classes.cardContent}>
              <div className={classes.knowledgeItem}>
                <div className={classes.knowledgeLine}></div>
                <p className={classes.knowledgeText}>Master's Degree</p>
              </div>
              <div className={classes.knowledgeItem}>
                <div className={classes.knowledgeLine} style={{width: '70%'}}></div>
                <p className={classes.knowledgeText}>Computer Science</p>
              </div>
              <div className={classes.knowledgeItem}>
                <div className={classes.knowledgeLine} style={{width: '50%'}}></div>
                <p className={classes.knowledgeText}>Odesa National University of Technology</p>
              </div>
            </div>
          </div>

          <img 
            className={`${classes.sergeImage} ${isOpenedInfo ? classes.fadeIn : ''}`} 
            src={sergePhoto} 
            alt='Serhii Kozhyn' 
          />
          
          {/* Right Card - Service Record & Personal Directive */}
          <div className={`${classes.rightInfoCard} ${isOpenedInfo ? classes.slideRight : ''}`}>
            <div className={classes.serviceRow}>
              <span className={classes.serviceLabel}>Service Record:</span>
              <span className={classes.serviceValue}>2 YEARS AS A DATABASE DEVELOPER</span>
            </div>
            
            <div className={classes.serviceRow}>
              <span className={classes.serviceLabel}>Operative Base:</span>
              <span className={classes.serviceValue}>ODESA PORT PLANT</span>
            </div>

            <div className={classes.directiveSection}>
              <div className={classes.directiveHeader}>
                <svg className={classes.directiveIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <h3>Personal Directive:</h3>
              </div>
              
              <div className={classes.directiveList}>
                <div className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Code-Crafted Accuracy</div>
                </div>
                <div className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Cross-Functional Collaboration</div>
                </div>
                <div className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Continuous Learning Agility</div>
                </div>
                <div className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Solution-Oriented Mindset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}