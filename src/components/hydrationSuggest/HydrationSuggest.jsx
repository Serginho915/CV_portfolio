import React, { useEffect, useState } from "react";
import classes from "./HydrationSuggest.module.sass";

export const HydrationSuggest = () => {
  const suggestion = "System suggests hydration before further navigation.";
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(suggestion.slice(0, i + 1));
      i++;
      if (i >= suggestion.length) clearInterval(interval);
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <span className={classes.cursor}>|</span>
        <span className={classes.text}>{visibleText}</span>
      </div>
    </div>
  );
};
