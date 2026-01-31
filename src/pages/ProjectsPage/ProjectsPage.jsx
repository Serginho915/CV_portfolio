import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react";
import { NextElementArrow } from '../../components/NextElementArrow/NextElementArrow';
import { BackElementArrow } from '../../components/BackElementArrow/BackElementArrow';
import classes from './ProjectsPage.module.sass';
import arrowIcon from '../../assets/images/arrow.svg';
import { projectsData } from './ProjectsData';

export const ProjectsPage = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProject = projectsData[currentIndex];

    const handleNext = () => {
        if (currentIndex < projectsData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigate('/contact');
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            navigate('/skills');
        }
    };

    return (
        <div className={classes.projectsPage}>
            {/* Background Layer */}
            <div className={classes.thumbnailBackground} />

            {/* FX Overlays */}
            <div className={classes.noiseOverlay} />

            {/* Grid Visualization Cells (borders create the grid) */}
            {/* Row 1 */}
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />

            {/* Row 2 */}
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />

            {/* Row 3 */}
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />
            <div className={classes.gridCell} />

            {/* Row 4 - No bottom border for these */}
            <div className={`${classes.gridCell} ${classes.noBottom}`} />
            <div className={`${classes.gridCell} ${classes.noBottom}`} />
            <div className={`${classes.gridCell} ${classes.noBottom}`} />
            <div className={`${classes.gridCell} ${classes.noBottom}`} />

            {/* Content Overlays - Animated per project */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: 'contents' }}
                >
                    <header className={classes.headerSection}>
                        <div className={classes.projectsHeader}>
                            <h1>{currentProject.title}</h1>
                        </div>
                    </header>



                    <div className={classes.projectDescription}>
                        <span className={classes.buildReportLabel}>{currentProject.buildReportLabel}</span>
                        <p className={classes.descriptionText}>
                            {currentProject.description}
                        </p>
                    </div>

                    <div className={classes.mainProjectImage}>
                        <img src={currentProject.image} alt={currentProject.title} />
                    </div>

                    <div className={classes.techList}>
                        {currentProject.techStack.map((tech, index) => (
                            <div key={index} className={classes.techItem}>{tech}</div>
                        ))}
                    </div>

                    {/* Central Call to Action Area */}
                    <main className={classes.mainContent}>
                        <motion.div
                            className={classes.demoAction}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            onClick={() => window.open(currentProject.demoUrl, '_blank')}
                        >
                            <img src={arrowIcon} className={classes.pixelArrow} alt="Arrow" />
                            <span className={classes.runDemoText}>{"< RUN DEMO >"}</span>
                        </motion.div>
                    </main>
                </motion.div>
            </AnimatePresence>

            {/* Page Navigation Area */}
            <div className={classes.navigation}>
                <div className={classes.backButton} onClick={handleBack}>
                    <BackElementArrow />
                </div>
                <div className={classes.nextButton} onClick={handleNext}>
                    <NextElementArrow />
                </div>
            </div>
        </div>
    );
};
