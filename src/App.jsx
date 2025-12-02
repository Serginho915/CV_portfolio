import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { HeroSection } from './pages/HeroSection/HeroSection';
function ForceStartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return null;
}


function PageWrapper({ Component, next }) {
  const navigate = useNavigate();

  const goToNext = () => {
    if (next) {
      navigate(next);
    }
  };

  return <Component onFinish={goToNext} />;
}

export default function App() {
  return (
    <BrowserRouter>
    <ForceStartPage />
      <Routes>
        <Route 
          path="/" 
          element={<PageWrapper Component={OnboardingPage} next="/hero" />} 
        />

        <Route 
          path="/hero" 
          element={<PageWrapper Component={HeroSection} next="/about" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
