import React, { useEffect, useState } from 'react'
import classes from './HydrationSuggest.module.sass'

export const HydrationSuggest = () => {

const suggestion = 'System suggests hydration before further navigation.'
const [visibleText, setVisibleText] = useState('');

useEffect(() => {
    if (visibleText.length < suggestion.length) {
      const timeout = setTimeout(() => {
        setVisibleText(suggestion.slice(0, visibleText.length + 1));
      }, 75);

      return () => clearTimeout(timeout);
    }
  }, [visibleText, suggestion]);


return (
    <span className={classes.blinkText}>
      <span className={[classes.cursor,classes.suggestText].join(' ')}>|</span>
      <span className={classes.suggestText} >{visibleText}</span>
    </span>
  );
}
