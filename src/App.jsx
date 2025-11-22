import React, { useState } from 'react';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { HeroSection } from './pages/HeroSection/HeroSection';

export default function App() {

  const [IsOnboardFinished,SetIsOnboardFinished] = useState(false);
  const handleOnboardingFinish =(value) =>{
    SetIsOnboardFinished(value);
  }



  return (<>
    <OnboardingPage onFinish = {handleOnboardingFinish}/>
    {IsOnboardFinished? <HeroSection /> : null}
  </>)
}