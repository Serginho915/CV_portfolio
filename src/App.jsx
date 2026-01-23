import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { HeroSection } from './pages/HeroSection/HeroSection';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/hero" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  );
}
