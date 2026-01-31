import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FooterComponent } from '../../components/Footer/footerComponent';
import classes from './MainLayout.module.sass';

const MainLayout = () => {
    const location = useLocation();
    const isHero = location.pathname === '/hero';
    const isContact = location.pathname === '/contact';

    return (
        <div className={`${classes.layoutWrapper} ${isHero ? classes.heroLayout : ''}`}>
            <main className={classes.content}>
                <Outlet />
            </main>
            {!isContact && <FooterComponent />}
        </div>
    );
};

export default MainLayout;
