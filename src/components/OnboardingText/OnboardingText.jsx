import React, { useEffect, useState, useRef } from 'react'
import classes from './OnboardingText.module.sass'

export const OnboardingText = ({ onFinish }) => {
    const text = [
        'Greetings, Traveller',
        'Your path`s been long through the stars.',
        'Pause here - refuel your energy'
    ]

    const [state, setState] = useState([]);
    const finished = useRef(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setState(prev => {
                if (prev.length < text.length) {
                    return [...prev, {
                        id: Date.now(),
                        text: text[prev.length],
                        status: 'visible'
                    }];
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (state.length !== text.length || finished.current) return;

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setState(prev => {
                    if (prev.length === 0) {
                        clearInterval(interval);
                        finished.current = true;
                        return [];
                    }

                    const newState = [...prev];
                    newState[newState.length - 1].status = "exiting";

                    setTimeout(() => {
                        setState(cur => cur.filter(i => i.id !== newState[newState.length - 1].id));
                    }, 500);

                    return newState;
                });
            }, 200);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [state]);

    
    useEffect(() => {
        if (finished.current) {
            onFinish?.(true);
        }
    }, [finished.current]);

    return (
        <div className={classes.container}>
            {state.map(item => (
                <div key={item.id}>
                    <h3
                        className={
                            item.status === "exiting"
                                ? classes.textExiting
                                : classes.textAnimated
                        }
                    >
                        {item.text}
                    </h3>
                </div>
            ))}
        </div>
    );
};
