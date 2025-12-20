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

        <div className={classes.heroInfoTitle}>
          <h1 className={classes.heroTitle}>Front-End Developer</h1>
          <h3 className={classes.heroSubTitle}>[ code operative ]</h3>
        </div>

        <div className={classes.cvButton}>
          <span className={classes.cvSpan}>Resume file</span>
          <button className={classes.cvButton}></button>
        </div>

        <div className={classes.nextButton}>
          <button></button>
        </div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M5 0C5.66304 0 6.29893 0.289731 6.76777 0.805456C7.23661 1.32118 7.5 2.02065 7.5 2.75C7.5 3.47935 7.23661 4.17882 6.76777 4.69454C6.29893 5.21027 5.66304 5.5 5 5.5C4.33696 5.5 3.70107 5.21027 3.23223 4.69454C2.76339 4.17882 2.5 3.47935 2.5 2.75C2.5 2.02065 2.76339 1.32118 3.23223 0.805456C3.70107 0.289731 4.33696 0 5 0ZM5 7C7.7625 7 9.5 8 10 9.625V11H0V9.625C0.5 8 2.2375 7 5 7Z" fill="#EBEBEB" />
                  </svg>
                  <p className={classes.infoText}>Kozhyn, Serhii</p>
                </li>
                <li className={classes.infoRow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11" fill="none">
                    <path d="M4 5.225C3.62112 5.225 3.25776 5.08013 2.98985 4.82227C2.72194 4.56441 2.57143 4.21467 2.57143 3.85C2.57143 3.48533 2.72194 3.13559 2.98985 2.87773C3.25776 2.61987 3.62112 2.475 4 2.475C4.37888 2.475 4.74224 2.61987 5.01015 2.87773C5.27806 3.13559 5.42857 3.48533 5.42857 3.85C5.42857 4.03057 5.39162 4.20937 5.31983 4.37619C5.24804 4.54301 5.14281 4.69459 5.01015 4.82227C4.8775 4.94995 4.72001 5.05123 4.54669 5.12033C4.37337 5.18944 4.1876 5.225 4 5.225ZM4 0C2.93913 0 1.92172 0.405624 1.17157 1.12764C0.421427 1.84965 0 2.82892 0 3.85C0 6.7375 4 11 4 11C4 11 8 6.7375 8 3.85C8 2.82892 7.57857 1.84965 6.82843 1.12764C6.07828 0.405624 5.06087 0 4 0Z" fill="#EBEBEB" />
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
              <ul className={[classes.cardContent, classes.cardContentBottom].join(' ')}>
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
              <div className={classes.directiveLine}></div>
              <header className={classes.directiveHeader}>
                <h2 className={classes.h2Title} style={{ color: 'white' }}>Personal Directive:</h2>
              </header>

              <ul className={classes.directiveList}>

                {['Code-Crafted Accuracy', 'Cross-Functional Collaboration', 'Continuous Learning Agility', 'Solution-Oriented Mindset'].map((directive, index, array) => {
                  const widthPercent = 100 - (index * 15);
                  return (
                    <li key={index} className={classes.directiveItem}>
                      <div className={classes.directiveNode}></div>
                      <div
                        className={classes.directiveBar}
                        style={{ width: `${widthPercent}%`, marginLeft: 'auto' }}
                      >
                        {directive}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        </section>
      </main>
    </>
  )
}