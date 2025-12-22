import React from 'react'
import classes from './ServiceRecordCard.module.sass'

const directives = [
  'Code-Crafted Accuracy',
  'Cross-Functional Collaboration',
  'Continuous Learning Agility',
  'Solution-Oriented Mindset',
];

export const ServiceRecordCard = ({ isOpenedInfo }) => {
  return (
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
          {directives.map((directive, index) => {
            const marginLeft = index * 26;

            return (
              <li key={index} className={classes.directiveItem}>
                <div className={classes.directiveNode} />
                <div
                  className={classes.directiveBar}
                  style={{ marginLeft: `${marginLeft}px` }}
                >
                  {directive}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  )
}

