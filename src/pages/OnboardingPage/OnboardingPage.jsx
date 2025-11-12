import React, { useRef, useState, useEffect } from 'react';
import { AnimatedDot } from '../../components/backrgound_Dots/AnimatedDot';
import { OnboardingText } from '../../components/OnboardingText/OnboardingText';
import { HorizontBG } from '../../components/HorizontalBG/HorizontBG';
import { GreetingRobot } from '../../components/greetingRobot/GreetingRobot';
import { HydrationSuggest } from '../../components/hydrationSuggest/HydrationSuggest';
import classes from './OnboardingPage.module.sass';

const DOTS_CONFIG = [
  { top: 613, left: 171, size: 12, color: '#A8C7FF', blur: 2, animation: 'cyanDot' },
  { top: 234, left: 1184, size: 8, color: '#5F8DFF', blur: 1, animation: 'blueDot' },
  { top: 88, left: 306, size: 8, color: '#EBEBEB', blur: 4, animation: 'whiteDot' },
  { top: 159, left: 1279, size: 5, color: '#EBEBEB', blur: 3, animation: 'neutralDot' },
  { top: 184, left: 1115, size: 3, color: '#C7C7C7', blur: 3, animation: 'grayDot' },
  { top: 230, left: 757, size: 5, color: '#C7C7C7', blur: 3, animation: 'purpleDot' },
  { top: 630, left: 896, size: 8, color: '#bbadadff', blur: 3, animation: 'neutralDot' }
];

export const OnboardingPage = () => {
  const [finished, setFinished] = useState(false);
  const [dotsFinishedCount, setDotsFinishedCount] = useState(0);
  const [hydrTextFinished, setHydrTextFinished] = useState(false);
  const dotsFinished = useRef(false);

  const handleTextFinish = () => {
    setFinished(true);
  };

  const handleDotAnimationEnd = () => {
    setDotsFinishedCount(prev => {
      const newCount = prev + 1;
      if (newCount === DOTS_CONFIG.length) {
        dotsFinished.current = true;
      }
      return newCount;
    });
  };

  const handleHydrationSuggestEnd = () => {
    setHydrTextFinished(true);
  };

  return (
    <>
      <div>
        <div className={classes.pageWrapper}>
          {DOTS_CONFIG.map((dotProps, index) => (
            <AnimatedDot
              key={`dot-${index}`}
              {...dotProps}
              toCenter={finished}
              onAnimationEnd={handleDotAnimationEnd}
            />
          ))}
        </div>
        <OnboardingText onFinish={handleTextFinish} />
      </div>

      <div className={classes.centerBarBlock}>
        {dotsFinished.current && <HorizontBG />}
      </div>

      {dotsFinished.current && (
        <HydrationSuggest onFinish={handleHydrationSuggestEnd} />
      )}

      {hydrTextFinished && <GreetingRobot />}
    </>
  );
};
