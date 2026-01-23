import React, { useEffect, useState } from 'react'
import { HeroHeader } from '../../components/HeroHeader/HeroHeader.jsx'
import { IdentityInfoCard } from '../../components/IdentityInfoCard/IdentityInfoCard.jsx'
import { HeroImage } from '../../components/HeroImage/HeroImage.jsx'
import { ServiceRecordCard } from '../../components/ServiceRecordCard/ServiceRecordCard.jsx'
import { FooterComponent } from '../../components/Footer/footerComponent.jsx'
import classes from './HeroSection.module.sass'

export const HeroSection = () => {
  const [isOpenedInfo, setIsOpenedInfo] = useState(false);

  useEffect(() => {
    if (isOpenedInfo) return;
    const timeOut = setTimeout(() => {
      setIsOpenedInfo(true);
    }, 1000)
  }, [])

  return (
    <div className={classes.heroPage}>
      <HeroHeader />

      <main className={classes.heroContainer}>
        <section className={classes.heroInfo}>
          <IdentityInfoCard isOpenedInfo={isOpenedInfo} />
          <HeroImage isOpenedInfo={isOpenedInfo} />
          <ServiceRecordCard isOpenedInfo={isOpenedInfo} />
        </section>
      </main>
      <FooterComponent />
    </div>
  )
}