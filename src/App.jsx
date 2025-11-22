import React, { useState } from 'react';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';

export default function App() {

  const [IsOnboardFinished,SetIsOnboardFinished] = useState(false);
  const handleOnboardingFinish =(value) =>{
    SetIsOnboardFinished(value);
  }



  return (<>
    <OnboardingPage onFinish = {handleOnboardingFinish}/>
    {IsOnboardFinished? <p>Success</p> : null}
  </>)
}