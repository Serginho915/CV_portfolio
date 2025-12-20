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
      <header className={classes.heroHeader}>
        <h1 className={classes.heroTitle}>Front-End Developer</h1>
        <h3 className={classes.heroSubTitle}>[ code operative ]</h3>
      </header>

      <main className={classes.heroContainer}>
        <section className={classes.heroInfo}>
          {/* Left Card - Identity Info + Knowledge Core */}
          <article className={`${classes.leftInfoCard} ${isOpenedInfo ? classes.slideLeft : ''}`}>
            <section className={classes.leftTopBlock}>
              <header className={classes.cardHeader}>
                <h2 className={classes.h2Title}>Identity Info:</h2>
              </header>
              <ul className={`${classes.cardContent} ${classes.cardContentTop}`}>
                <li className={classes.infoRow}>
                  <svg className={classes.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <p className={classes.infoText}>Kozhyn, Serhii</p>
                </li>
                <li className={classes.infoRow}>
                  <svg className={classes.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className={classes.infoText}>Cardiff, UK</p>
                </li>
              </ul>
            </section>

            <section className={classes.leftBottomBlock}>
              <header
                className={classes.cardHeader}
                style={{
                  width: '100%',
                  clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)',
                }}
              >
                <h2 className={classes.h2Title}>Knowledge Core:</h2>
              </header>
              <ul className={classes.cardContent}>
                <li className={classes.knowledgeItem}>
                  <div className={classes.knowledgeLine} aria-hidden="true"></div>
                  <p className={classes.knowledgeText}>Master's Degree</p>
                </li>
                <li className={classes.knowledgeItem}>
                  <div className={classes.knowledgeLine} style={{ width: '70%' }} aria-hidden="true"></div>
                  <p className={classes.knowledgeText}>Computer Science</p>
                </li>
                <li className={classes.knowledgeItem}>
                  <div className={classes.knowledgeLine} style={{ width: '50%' }} aria-hidden="true"></div>
                  <p className={classes.knowledgeText}>Odesa National University of Technology</p>
                </li>
              </ul>
            </section>
          </article>

          <figure className={classes.imageWrapper}>
            <img
              className={`${classes.sergeImage} ${isOpenedInfo ? classes.fadeIn : ''}`}
              src={sergePhoto}
              alt='Serhii Kozhyn - Front-End Developer'
            />
          </figure>

          {/* Right Card - Service Record & Personal Directive */}
          <article className={`${classes.rightInfoCard} ${isOpenedInfo ? classes.slideRight : ''}`}>
            <section>
              <dl className={classes.serviceList}>
                <div className={classes.serviceRow} style={{ paddingTop: 0 }}>
                  <dt className={classes.serviceLabel}>Service Record:</dt>
                  <dd className={classes.serviceValue}>2 YEARS AS A DATABASE DEVELOPER</dd>
                </div>
                <div className={classes.serviceRow}>
                  <dt className={classes.serviceLabel}>Operative Base:</dt>
                  <dd className={classes.serviceValue}>ODESA PORT PLANT</dd>
                </div>
              </dl>
            </section>

            <section className={classes.directiveSection}>
              <header className={classes.directiveHeader}>
                <h2 className={classes.h2Title} style={{color: 'white'}}>Personal Directive:</h2>
              </header>

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
              </ul>
            </section>
          </article>
        </section>
      </main>
    </>
  )
}