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
    <div>
       <h1 className={classes.heroTitle}>Front-End Developer</h1>
    </div>
     
      <div className={classes.heroContainer}>
        <div className={classes.heroInfo}>
          <div className={`${classes.leftInfoCard} ${isOpenedInfo ? classes.slideLeft : ''}`}>
            <div className={classes.leftTopBlock}>
              <div className={classes.cardHeader}>
                <h3>Identity Info:</h3>
              </div>
              <ul className={`${classes.cardContent} ${classes.cardContentTop}`}>
                <li className={classes.infoRow}>
                  <svg className={classes.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <p className={classes.infoText}>Kozhyn, Serhii</p>
                </li>
                <li className={classes.infoRow}>
                  <svg className={classes.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className={classes.infoText}>Cardiff, UK</p>
                </li>
              </ul>
            </div>


            <div className={classes.leftBottomBlock}>
              <div
                className={classes.cardHeader}
                style={{
                  width: '100%',
                  clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)',
                }}
              >
                <h3>Knowledge Core:</h3>
              </div>
              <ul className={classes.cardContent}>
                <li className={classes.knowledgeItem}>
                  <div className={classes.knowledgeLine}></div>
                  <p className={classes.knowledgeText}>Master's Degree</p>
                </li>
                <li className={classes.knowledgeItem}>
                  <div className={classes.knowledgeLine} style={{ width: '70%' }}></div>
                  <p className={classes.knowledgeText}>Computer Science</p>
                </li>
                <li className={classes.knowledgeItem}>
                  <div className={classes.knowledgeLine} style={{ width: '50%' }}></div>
                  <p className={classes.knowledgeText}>Odesa National University of Technology</p>
                </li>
              </ul>
            </div>

          </div>

          <img
            className={`${classes.sergeImage} ${isOpenedInfo ? classes.fadeIn : ''}`}
            src={sergePhoto}
            alt='Serhii Kozhyn'
          />

          {/* Right Card - Service Record & Personal Directive */}
          <div className={`${classes.rightInfoCard} ${isOpenedInfo ? classes.slideRight : ''}`}>
            <ul className={classes.serviceList}>
              <li className={classes.serviceRow} style={{paddingTop : 0}}>
                <span className={classes.serviceLabel}>Service Record:</span>
                <span className={classes.serviceValue}>2 YEARS AS A DATABASE DEVELOPER</span>
              </li>
              <li className={classes.serviceRow}>
                <span className={classes.serviceLabel}>Operative Base:</span>
                <span className={classes.serviceValue}>ODESA PORT PLANT</span>
              </li>
            </ul>

            <div className={classes.directiveSection}>
              <div className={classes.directiveHeader}>
                {/* <svg className={classes.directiveIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg> */}
                <h3>Personal Directive:</h3>
              </div>

              <ul className={classes.directiveList}>
                <li className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Code-Crafted Accuracy</div>
                </li>
                <li className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Cross-Functional Collaboration</div>
                </li>
                <li className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Continuous Learning Agility</div>
                </li>
                <li className={classes.directiveItem}>
                  <div className={classes.directiveBar}>Solution-Oriented Mindset</div>
                </li>
                <li>
                  <a href="https://"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}