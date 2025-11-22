import React, { useEffect, useState } from "react";
import classes from "./HydrationSuggest.module.sass";

export const HydrationSuggest = ({ onFinish, showComplete, onCompleteFinish }) => {
  const suggestion = "System suggests hydration before further navigation.";
  const completeText = "Complete.";
  const [visibleText, setVisibleText] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const [showCompleteText, setShowCompleteText] = useState(false);
  const [completeVisible, setCompleteVisible] = useState("");

  // Печатаем первый текст
  useEffect(() => {
    if (showComplete) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(prev => suggestion.slice(0, prev.length + 1));
      i++;
      if (i >= suggestion.length) {
        clearInterval(interval);
        if (onFinish) onFinish();
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  // Когда showComplete = true, начинаем исчезновение
  useEffect(() => {
    if (showComplete && !isExiting) {
      setIsExiting(true);
      
      // После исчезновения показываем Complete
      setTimeout(() => {
        setVisibleText("");
        setShowCompleteText(true);
      }, 500);
    }
  }, [showComplete]);

  // Печатаем "Complete."
  useEffect(() => {
    if (!showCompleteText) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setCompleteVisible(prev => completeText.slice(0, prev.length + 1));
      i++;
      if (i >= completeText.length) {
        clearInterval(interval);
        // Через 2 секунды вызываем onCompleteFinish
        setTimeout(() => {
          if (onCompleteFinish) onCompleteFinish();
        }, 2000);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [showCompleteText]);

  return (
    <div className={classes.container}>
      <div 
        className={`${classes.wrapper} ${isExiting && !showCompleteText ? classes.exiting : ''}`}
        style={showCompleteText ? { marginLeft: '650px' } : {}}
      >
        <span className={classes.cursor}>|</span>
        <span className={classes.text}>
          {showCompleteText ? completeVisible : visibleText}
        </span>
      </div>
    </div>
  );
};