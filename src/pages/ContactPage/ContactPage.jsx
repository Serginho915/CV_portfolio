import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BackgroundDots } from '../../components/background_Dots/BackgroundDots';
import classes from './ContactPage.module.sass';

export const ContactPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', name: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = '[ IDENTITY NOT DETECTED ]';
        if (!formData.email.trim()) {
            newErrors.email = '[ SIGNAL_ORIGIN_MISSING ]';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = '[ INVALID_SIGNAL_FORMAT ]';
        }
        if (!formData.message.trim()) newErrors.message = '[ BUFFER_EMPTY ]';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('https://formspree.io/f/maqjgdkr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ email: '', name: '', message: '' });
            } else {
                setErrors({ submit: '[ TRANSMISSION_FAILED ]' });
            }
        } catch (error) {
            setErrors({ submit: '[ UPLINK_INTERRUPTED ]' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={classes.contactPage}>
            {/* Background Layer */}
            <BackgroundDots />

            {/* Sidebar Socials (Left) */}
            <div className={classes.sideSocials}>
                <a href="https://www.linkedin.com/in/serhii-kozhyn/" target="_blank" className={`${classes.socialBox} ${classes['icon-linkedin']}`}>
                </a>
                <a href="https://github.com/Serginho915" target="_blank" className={`${classes.socialBox} ${classes['icon-github']}`}>
                </a>
                <a href="mailto:sergunho915@gmail.com" className={classes.socialBox}>
                    <span className={classes.socialIcon}>M</span>
                </a>
            </div>

            {/* Main Form Content */}
            <main className={classes.mainContent}>
                <motion.div
                    className={classes.formContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <form
                        className={classes.contactForm}
                        id="contactForm"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className={classes.inputWrapper}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Neuro Mail"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? classes.errorInput : ''}
                            />
                            <AnimatePresence>
                                {errors.email && (
                                    <motion.span
                                        className={classes.errorMessage}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {errors.email}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className={classes.inputWrapper}>
                            <input
                                type="text"
                                name="name"
                                placeholder="DEFINE PERSONAL NODE"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? classes.errorInput : ''}
                            />
                            <AnimatePresence>
                                {errors.name && (
                                    <motion.span
                                        className={classes.errorMessage}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {errors.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className={classes.inputWrapper}>
                            <textarea
                                name="message"
                                placeholder="DROP YOUR SIGNAL"
                                rows="8"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? classes.errorInput : ''}
                            />
                            <AnimatePresence>
                                {errors.message && (
                                    <motion.span
                                        className={classes.errorMessage}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {errors.message}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            type="submit"
                            className={`${classes.rabbitButton} ${isSubmitting ? classes.submitting : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'TRANSMITTING...' : isSuccess ? 'SIGNAL RECEIVED' : 'FOLLOW THE WHITE RABBIT'}
                        </button>
                    </form>
                </motion.div>
            </main>

            {/* Right Interaction (Let's Collaborate) - Also a submit button */}
            <button type="submit" form="contactForm" className={classes.rightCta} disabled={isSubmitting}>
                <div className={classes.ctaGroup}>
                    <div className={classes.arrowLine}></div>
                    <span className={classes.ctaText}>Let's Collaborate</span>
                </div>
            </button>

            {/* Bottom Navigation */}
            <div className={classes.bottomNavLeft}>
                <button onClick={() => navigate('/hero')}>User Profile</button>
                <button onClick={() => navigate('/skills')}>Protocols</button>
                <button onClick={() => navigate('/projects')}>Projects</button>
            </div>

            {/* Bottom Center (Start Over) */}
            <div className={classes.startOver} onClick={() => navigate('/')}>
                <span>Start Over</span>
            </div>
        </div>
    );
};
