# Cyberpunk HUD Portfolio

A minimalist, high-tech React developer portfolio with a cyberpunk HUD aesthetic, featuring smooth animations, interactive transitions, and a dark, immersive interface.

![Cyberpunk HUD Aesthetic](public/favicon.jpg)

## 🚀 Key Features

-   **Cyberpunk HUD Design**: Immersive dark interface with neon accents, grid overlays, and futuristic HUD elements.
-   **Smooth Animations**: Leverages **Framer Motion** for liquid transitions between sections and interactive hover effects.
-   **Dynamic Navigation**: A non-linear navigation experience through Onboarding, Skills, and Projects.
-   **Interactive Background**: Custom-built `BackgroundDots` system providing an animated, depth-aware background effect.
-   **Responsive Layout**: Fully responsive design built with **SASS** and modern CSS layouts.
-   **HUD Contact Form**: Custom-validated contact form with real-time error feedback in HUD style, integrated with **Formspree**.
-   **Cyberpunk Favicon**: Custom-designed 'SK' glitch-style favicon for a cohesive branding experience.

## 🛠️ Tech Stack

-   **Core**: [React 18](https://reactjs.org/)
-   **Styling**: [SASS / SCSS](https://sass-lang.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Routing**: [React Router 7](https://reactrouter.com/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Form Handling**: [Formspree](https://formspree.io/)

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI components (Footer, BackgroundDots, etc.)
├── layouts/         # Page layouts (MainLayout)
├── pages/           # Feature-specific pages:
│   ├── HeroSection  # Main landing page
│   ├── Onboarding   # Sequential introduction
│   ├── ProjectsPage # Interactive project showcase
│   ├── SkillsPage   # Technical protocols list
│   └── ContactPage  # HUD-themed form and socials
├── styles/          # Global styles and SASS variables
└── App.jsx          # Route configuration
```

## ⚙️ Setup & Installation

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16.x or higher)
-   npm or yarn

### Installation Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Serginho915/CV_portfolio.git
    cd CV_portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📬 Contact

-   **LinkedIn**: [Serhii Kozhyn](https://www.linkedin.com/in/serhii-kozhyn/)
-   **GitHub**: [@Serginho915](https://github.com/Serginho915)
-   **Email**: serginho915@gmail.com

---
*Created by Serhii Kozhyn — 2026*
