import React, { useEffect, useState } from "react";
import classes from "./HydrationSuggest.module.sass";

export const HydrationSuggest = ({ onFinish }) => {
  const suggestion = "System suggests hydration before further navigation.";
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
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
  }, [onFinish, suggestion]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <span className={classes.cursor}>|</span>
        <span className={classes.text}>{visibleText}</span>
      </div>
    </div>
  );
};
