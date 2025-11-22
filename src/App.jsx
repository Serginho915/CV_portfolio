import React, { useState, createContext, useContext } from 'react';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { HeroSection } from './pages/HeroSection/HeroSection';

// Контекст для навигации
const NavigationContext = createContext();


export const useNavigation = () => useContext(NavigationContext);

// Конфигурация страниц
const PAGES = {
  onboarding: { component: OnboardingPage, next: 'hero' },
  hero: { component: HeroSection, next: 'about' },

};

export default function App() {
  const [currentPage, setCurrentPage] = useState('onboarding');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Переход на следующую страницу
  const goToNext = () => {
    const nextPage = PAGES[currentPage]?.next;
    if (nextPage) {
      goTo(nextPage);
    }
  };

  // Переход на конкретную страницу
  const goTo = (pageId) => {
    if (PAGES[pageId] && pageId !== currentPage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(pageId);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const CurrentPage = PAGES[currentPage]?.component;

  return (
    <NavigationContext.Provider value={{ currentPage, goTo, goToNext }}>
      <div style={{
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 0.5s ease'
      }}>
        {CurrentPage && <CurrentPage onFinish={goToNext} />}
      </div>
    </NavigationContext.Provider>
  );
}