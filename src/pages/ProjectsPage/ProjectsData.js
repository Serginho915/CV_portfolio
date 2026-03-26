import hlegalImg from '../../assets/images/hlegal.png';
import shoppingCartImg from '../../assets/images/ShoppingCart.png';
import IET from'../../assets/images/IET.png'
import friendKitchen from '../../assets/images/friendKitchen.png'

export const projectsData = [
    {
        id: 1,
        title: "IET-Shop",
        description: "High-performance e-commerce ecosystem dedicated to the sale and distribution of professional IT courses. Built with a cutting-edge stack of Next.js 16 and React 19, the platform delivers a seamless, lightning-fast shopping experience. It features a custom-built internationalization engine (EN/BG) and a fully containerized architecture, ensuring global scalability and top-tier SEO performance.",
        techStack: ["Typescript","NextJS","React","Javascript", "HTML&CSS", "API"],
        image: IET, 
        demoUrl: "https://obucheniya.com/",
        buildReportLabel: "< PROJECT PREVIEW >"
    },
    {
        id: 2,
        title: "Friend Kitchen",
        description: "A full-stack automated menu management system, reducing manual design time for kitchen operations. Used React 19  and Typescript.",
        techStack: ["NodeJS","Typescript","React", "HTML&CSS","SQLite"],
        image: friendKitchen,
        demoUrl: "https://github.com/Serginho915/FriendKitchen",
        buildReportLabel: "< BUILD REPORT >"
    },
    {
        id: 3,
        title: "Hlegal",
        description: "A modern law firm landing page built with a focus on responsiveness, clean typography, and professional aesthetic. Designed to convey trust and accessibility.",
        techStack: ["JS", "HTML&CSS", "Responsive", "Integration"],
        image: hlegalImg,
        demoUrl: "https://serginho915.github.io/Hlegal-responsive-/",
        buildReportLabel: "< PROJECT PREVIEW >"
    },
    {
        id: 4,
        title: "Shopping Cart",
        description: "A simple online shop with user registration, built using an external API.",
        techStack: ["Javascript", "HTML&CSS", "API"],
        image: shoppingCartImg, 
        demoUrl: "https://serginho915.github.io/Shop-ShoppingCart/index.html",
        buildReportLabel: "< PROJECT PREVIEW >"
    },
];
