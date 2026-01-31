import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { HeroSection } from './pages/HeroSection/HeroSection';
import { SkillsPage } from './pages/SkillsPage/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import MainLayout from './layouts/MainLayout/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
