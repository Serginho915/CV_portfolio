import React from 'react'
import { Coffee } from '../HydrationCups/Coffee'
import classes from './HydrationCard.module.sass'

export const HydrationCard = () => {
    const drinks = [
        {
            id: 1,
            name: 'coffee',
            icon: <Coffee />,
            description: 'Synthetic coffee strain. Boosts clarity.',
            boost: [95, 100, 82]
        },
        {
            id: 2,
            name: 'PINT',
            icon: <Coffee />,
            description: 'Non-fermented mind cooler. Zero memory loss.',
            boost: [50, 90, 100]
        }
    ]

    const stats = ['Sensory Boost', 'Energy', 'Vibe']

    return (
        <div className={classes.cardContainer}>
            {drinks.map((d) => (
                <div key={d.id} className={classes.card}>
                    {/* SVG Рамка БЕЗ черной панели описания */}
                    <svg className={classes.svgFrame} xmlns="http://www.w3.org/2000/svg" width="329" height="279" viewBox="0 0 329 279" fill="none">
                        <path d="M329 262.708V16.292C329 7.29416 321.858 0 313.048 0H192.585C190.033 0 187.518 0.625407 185.252 1.8237L172.891 8.35878C170.625 9.55708 168.11 10.1825 165.558 10.1825H85.7386C83.4803 10.1825 81.2476 9.6927 79.1884 8.74554L63.299 1.43694C61.2398 0.48978 59.0071 0 56.7487 0H15.9515C7.14174 0 0 7.29416 0 16.292V262.708C0 271.706 7.14171 279 15.9515 279H56.999C59.0957 279 61.1719 278.578 63.1087 277.758L87.292 267.516C89.2288 266.696 91.305 266.274 93.4018 266.274H243.856C246.412 266.274 248.932 266.901 251.201 268.104L268.314 277.17C270.584 278.372 273.103 279 275.659 279H313.048C321.858 279 329 271.706 329 262.708Z" fill="#DAE8FF" fillOpacity="0.3" />
                        
                        {/* Штрихкод */}
                        <path d="M9.95436 80.8652H8.84564C8.3786 80.8652 8 81.2438 8 81.7109V112.154C8 112.621 8.3786 112.999 8.84564 112.999H9.95436C10.4214 112.999 10.8 112.621 10.8 112.154V81.7109C10.8 81.2438 10.4214 80.8652 9.95436 80.8652Z" fill="#292A33" />
                        <path d="M13.9195 112.154V91.8354C13.9195 91.3684 13.5409 90.9897 13.0739 90.9897C12.6069 90.9897 12.2283 91.3684 12.2283 91.8354V112.154C12.2283 112.621 12.6069 113 13.0739 113C13.5409 113 13.9195 112.621 13.9195 112.154Z" fill="#292A33" />
                        <path d="M19.7545 80.8652H17.0428C16.6879 80.8652 16.4001 81.153 16.4001 81.5079C16.4001 81.8629 16.6879 82.1506 17.0428 82.1506H18.0045C18.4715 82.1506 18.8501 82.5292 18.8501 82.9962V88.4168V90.3026C18.8501 90.7696 18.4715 91.1482 18.0045 91.1482H17.2458C16.7788 91.1482 16.4001 91.5268 16.4001 91.9938V112.154C16.4001 112.621 16.7788 112.999 17.2458 112.999H19.7545C20.2215 112.999 20.6001 112.621 20.6001 112.154V81.7109C20.6001 81.2438 20.2215 80.8652 19.7545 80.8652Z" fill="#292A33" />
                        <path d="M134 109.513V84.352C134 83.885 133.622 83.5063 133.154 83.5063C132.687 83.5063 132.309 83.885 132.309 84.352V109.513C132.309 109.98 132.687 110.358 133.154 110.358C133.622 110.358 134 109.98 134 109.513Z" fill="#292A33" />
                        
                        {/* Черная панель ТОЛЬКО для иконки */}
                        <path d="M171 56.3236V72.3512C171 73.6588 171.639 74.8839 172.712 75.6319L225.255 112.281C225.926 112.749 226.725 113 227.543 113H317C319.209 113 321 111.209 321 109V12C321 9.79086 319.209 8 317 8H227.743C226.802 8 225.891 8.33206 225.17 8.93773L172.427 53.2613C171.522 54.0213 171 55.1423 171 56.3236Z" fill="#1A1A1A" />
                    </svg>

                    {/* Контент поверх SVG */}
                    <div className={classes.content}>
                        {/* Header */}
                        <div className={classes.header}>
                            <h3 className={classes.title}>
                                SYN-{d.name.toUpperCase()}
                            </h3>
                            
                            {/* Иконка */}
                            <div className={classes.iconWrapper}>
                                {d.icon}
                            </div>
                        </div>

                        {/* Описание - теперь в HTML */}
                        <div className={classes.description}>
                            <p className={classes.descriptionText}>
                                {d.description}
                            </p>
                        </div>

                        {/* Статистика */}
                        <div className={classes.statsContainer}>
                            {stats.map((stat, index) => (
                                <div key={index} className={classes.statItem}>
                                    <div className={classes.statLabel}>
                                        {stat}
                                    </div>
                                    <div className={classes.statBar}>
                                        <span className={classes.statValue}>
                                            {d.boost[index]}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}