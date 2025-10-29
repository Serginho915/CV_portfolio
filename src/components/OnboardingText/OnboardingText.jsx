import React, { useEffect, useState, useRef } from 'react'
import classes from './OnboardingText.module.sass'

export const OnboardingText = () => {
    const text = [
        'Greetings, Traveller',
        'Your path`s been long through the stars.',
        'Pause here - refuel your energy'
    ]

    const [state, setState] = useState([])
    const intervalRef = useRef(null)
    const timeoutRef = useRef(null)


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setState(prev => {
                if (prev.length < text.length) {
                    return [...prev, { id: Date.now(), text: text[prev.length], status: 'visible' }]
                } else {
                    clearInterval(intervalRef.current)
                    return prev
                }
            })
        }, 1000)

        return () => clearInterval(intervalRef.current)
    }, [])


    useEffect(() => {
        if (state.length === text.length && state.length > 0) {
            timeoutRef.current = setTimeout(() => {
                const removeInterval = setInterval(() => {
                    setState(prev => {
                        if (prev.length === 0) {
                            clearInterval(removeInterval)
                            return []
                        }
                        const newState = [...prev]
                        newState[newState.length - 1].status = 'exiting'

                        setTimeout(() => {
                            setState(current => current.filter(item => item.id !== newState[newState.length - 1].id))
                        }, 500)

                        return newState
                    })
                }, 200)
            }, 2000)

            return () => clearTimeout(timeoutRef.current)
        }
    }, [state, text.length])

    return (
        <div className={classes.container}>
            {state.map(item => (
                <div>
                    <h3
                        key={item.id}
                        className={item.status === 'exiting' ? classes.textExiting : classes.textAnimated}
                    >
                        {item.text}
                    </h3>
                </div>
            ))}
        </div>
    )
}
