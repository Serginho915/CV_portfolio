import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react";
import { NextElementArrow } from '../../components/NextElementArrow/NextElementArrow';
import { BackElementArrow } from '../../components/BackElementArrow/BackElementArrow';
import { SkillCard } from '../../components/SkillCard/SkillCard';
import { PathDot } from './components/PathDot';
import { Marquee } from './components/Marquee';
import { TECH_PROTOCOLS, HUMAN_PROTOCOLS, ANIM_DURATION } from './SkillsData';
import classes from './SkillsPage.module.sass';

export const SkillsPage = () => {
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState('tech');

    const handleBarClick = (id) => {
        setActiveView(id === activeView ? 'tech' : id);
    };

    const currentHuman = HUMAN_PROTOCOLS.find(h => h.id === activeView);

    return (
        <div className={classes.skillsPage}>
            <div className={classes.verticalLine}>
                {[45, 55, 65, 75, 85].slice(1).map((pos, i) => (
                    <PathDot
                        key={i}
                        style={{ top: `${pos}%`, left: '50%' }}
                        delay={ANIM_DURATION}
                        hitTime={[0.187, 0.458, 0.729, 1][i]}
                        animDuration={ANIM_DURATION}
                    />
                ))}
                <motion.div
                    className={classes.snakeBlockVertical}
                    animate={{
                        top: ["45%", "55%", "55%", "65%", "65%", "75%", "75%", "85%"],
                        opacity: [1, 1, 1, 1, 1, 1, 1, 0]
                    }}
                    transition={{
                        duration: ANIM_DURATION,
                        times: [0, 0.187, 0.27, 0.458, 0.54, 0.729, 0.812, 1],
                        repeat: Infinity,
                        repeatDelay: ANIM_DURATION * 2,
                        ease: "linear",
                        delay: ANIM_DURATION
                    }}
                />
            </div>

            {/* Header / Tech Tab */}
            <header className={classes.headerSection}>
                <div className={classes.headerLine}>
                    {[0, 10, 20, 30, 40].slice(1).map((pos, i) => (
                        <PathDot
                            key={i}
                            style={{ left: `${pos}%`, top: '50%' }}
                            delay={0}
                            hitTime={[0.187, 0.458, 0.729, 1][i]}
                            animDuration={ANIM_DURATION}
                        />
                    ))}
                    <motion.div
                        className={classes.snakeBlockHorizontal}
                        animate={{
                            left: ["0%", "10%", "10%", "20%", "20%", "30%", "30%", "40%"],
                            opacity: [1, 1, 1, 1, 1, 1, 1, 0]
                        }}
                        transition={{
                            duration: ANIM_DURATION,
                            times: [0, 0.187, 0.27, 0.458, 0.54, 0.729, 0.812, 1],
                            repeat: Infinity,
                            repeatDelay: ANIM_DURATION * 2,
                            ease: "linear",
                            delay: 0
                        }}
                    />
                </div>
                <h2
                    className={classes.protocolsTitle}
                    onClick={() => setActiveView('tech')}
                    style={{ cursor: 'pointer' }}
                >
                    {activeView === 'tech' ? 'Tech Protocols' : 'Back to Tech'}
                </h2>
            </header>

            {/* Main Content Area */}
            <div className={classes.contentArea}>
                {activeView === 'tech' ? (
                    <motion.div
                        className={classes.techProtocolsGrid}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        {TECH_PROTOCOLS.map((category) => (
                            <div key={category.id} className={classes.categoryRow}>
                                <div className={classes.categoryLabel}>
                                    <span className={classes.categoryName}>{category.name}</span>
                                    <span className={classes.categoryNumber}>{category.id}</span>
                                </div>
                                <div className={classes.skillsList}>
                                    {category.skills.map((skill, idx) => (
                                        <SkillCard
                                            key={`${category.id}-${idx}`}
                                            iconSrc={skill.icon}
                                            name={skill.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        className={classes.humanDetailView}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={activeView}
                    >
                        <div className={classes.gifContainer}>
                            <img
                                src={currentHuman.gifUrl}
                                alt="Human Protocol"
                                className={classes.humanGif}
                            />
                            <Marquee text={currentHuman.description} />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Human Protocols Section / Tabs */}
            <section className={classes.humanProtocolsSection}>
                <div className={classes.labelSection}>
                    <div className={classes.bottomLine}>
                        {[100, 90, 80, 70, 60].slice(1).map((pos, i) => (
                            <PathDot
                                key={i}
                                style={{ left: `${pos}%`, top: '50%' }}
                                delay={ANIM_DURATION * 2}
                                hitTime={[0.187, 0.458, 0.729, 1][i]}
                                animDuration={ANIM_DURATION}
                            />
                        ))}
                        <motion.div
                            className={classes.snakeBlockHorizontal}
                            animate={{
                                left: ["100%", "90%", "90%", "80%", "80%", "70%", "70%", "60%"],
                                opacity: [1, 1, 1, 1, 1, 1, 1, 0]
                            }}
                            transition={{
                                duration: ANIM_DURATION,
                                times: [0, 0.187, 0.27, 0.458, 0.54, 0.729, 0.812, 1],
                                repeat: Infinity,
                                repeatDelay: ANIM_DURATION * 2,
                                ease: "linear",
                                delay: ANIM_DURATION * 2
                            }}
                        />
                    </div>
                    <h2 className={classes.humanTitle}>Human Protocols</h2>
                </div>
                <div className={classes.barsContainer}>
                    {HUMAN_PROTOCOLS.map((h, i) => (
                        <div
                            key={h.id}
                            className={`${classes.skillBar} ${activeView === h.id ? classes.active : ''}`}
                            onClick={() => handleBarClick(h.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className={classes.barLabel}>{i + 1}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Page Navigation */}
            <div className={classes.navigation}>
                <div className={classes.backButton} onClick={() => navigate('/hero')}>
                    <BackElementArrow className={classes.backArrow} />
                </div>

                <div className={classes.nextButton} onClick={() => navigate('/projects')}>
                    <span className={classes.nextText}>Keep Exploring</span>
                    <NextElementArrow />
                </div>
            </div>
        </div>
    );
};
