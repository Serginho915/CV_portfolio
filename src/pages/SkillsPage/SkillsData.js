import gif1 from '../../assets/Gifs/the office GIF.gif';
import gif2 from '../../assets/Gifs/Bored Season 3 GIF by The Office.gif';
import gif3 from '../../assets/Gifs/Excited Season 2 GIF by The Office.gif';
import gif4 from '../../assets/Gifs/The Office GIF (1).gif';
import gif5 from '../../assets/Gifs/Season 6 Nbc GIF by The Office (1).gif';

export const ICONS = {
    SASS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    REACT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    TAILWIND: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    LESS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg",
    JS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    BOOTSTRAP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    AJAX: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    WEBPACK: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    POSTGRES: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MONGODB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    FIGMA: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    GIT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    ORACLE: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='2' fill='%23f80000'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Arial, sans-serif' font-size='8' font-weight='bold'%3ESQL%3C/text%3E%3C/svg%3E",
};

export const ANIM_DURATION = 6;

export const TECH_PROTOCOLS = [
    {
        id: "01",
        name: "Markup & Styling",
        skills: [
            { name: "SASS", icon: ICONS.SASS },
            { name: "HTML5", icon: ICONS.HTML5 },
            { name: "REACT", icon: ICONS.REACT },
            { name: "CSS3", icon: ICONS.CSS3 },
            { name: "TWIND", icon: ICONS.TAILWIND },
            { name: "LESS", icon: ICONS.LESS },
        ]
    },
    {
        id: "02",
        name: "JavaScript Ecosystem",
        skills: [
            { name: "JS", icon: ICONS.JS },
            { name: "ReactJS", icon: ICONS.REACT },
            { name: "BOOTSTRAP", icon: ICONS.BOOTSTRAP },
            { name: "SASS", icon: ICONS.SASS },
            { name: "WPACK", icon: ICONS.WEBPACK }
        ]
    },
    {
        id: "03",
        name: "Databases",
        skills: [
            { name: "POSTGRE", icon: ICONS.POSTGRES },
            { name: "MDB", icon: ICONS.MONGODB },
            { name: "Oracle SQL", icon: ICONS.ORACLE }
        ]
    },
    {
        id: "04",
        name: "Design & Prototyping",
        skills: [
            { name: "FIGMA", icon: ICONS.FIGMA }
        ]
    },
    {
        id: "05",
        name: "Version Control",
        skills: [
            { name: "GIT", icon: ICONS.GIT }
        ]
    }
];

export const HUMAN_PROTOCOLS = [
    {
        id: "human-01",
        description: "ADAPTABILITY CORE",
        gifUrl: gif1
    },
    {
        id: "human-02",
        description: "COLLABORATIVE SYSTEMS",
        gifUrl: gif2
    },
    {
        id: "human-03",
        description: "UPGRADE",
        gifUrl: gif3
    },
    {
        id: "human-04",
        description: "CONSISTENCY MODULE",
        gifUrl: gif4
    },
    {
        id: "human-05",
        description: "PRECISION ANALYTICS",
        gifUrl: gif5
    }
];
