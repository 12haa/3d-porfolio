import Editedthree from "../assets/Edited-three.jpeg";
import Editedtwo from "../assets/Edited-two.jpeg";
import Editedfour from "../assets/EditedFour.jpeg";
import NFT from "../assets/NFT.jpeg";
import Todo from "../assets/ToDo.jpeg";
import Summarize from "../assets/summarize.jpeg";
import Porfolio from "../assets/Porfolio_Sample.jpeg";
import Filmpire from "../assets/Filmpire.jpeg";
import Snapgram from "../../src/assets/SnapGram.png";
import TaskGuru from "../../src/assets/TaskGuru.png"
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React JS",
        icon: mobile,
    },
    {
        title: "HTML",
        icon: backend,
    },
    {
        title: "Css ( Tailwind & Bootstrap)",
        icon: creator,
    },
    {
        title: "Framer-Motion",
        icon: creator,
    },
    {
        title: "Swiper-JS",
        icon: web,
    },
    {
        title: "Firebase",
        icon: mobile,
    },
    {
        title: "GSAP",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Lorem",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Article Summarizer",
        description:
            "Article Summarzier App that recives a link and summarizes the article related to the link given.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "RapidApi ",
                color: "pink-text-gradient",
            },
        ],
        image: Summarize,
        source_code_link: "https://github.com/12haa/Simple-ToDo-App",
        live_demo_link: "https://article-summarizer-gamma.vercel.app/",
    },
    {
        name: "Filmpire",
        description: "Complete movie app with search , login and category sections",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MUI",
                color: "green-text-gradient",
            },
            {
                name: "TMDB ",
                color: "pink-text-gradient",
            },
            {
                name: "Redux ",
                color: "pink-text-gradient",
            },
        ],
        image: Filmpire,
        source_code_link: "https://github.com/12haa/Filmpire_MovieApp",
        live_demo_link: "https://filmpire-movie-app.vercel.app/",
    },
    {
        name: "SnapGram",
        description: "A Social Media Called \"SnapGram\" which in users can post , like , comment and scroll to see posts and save their favorite post.",
        tags: [
            {
                name: "Tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "Appwrite",
                color: "pink-text-gradient",
            },
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "React Query",
                color: "pink-text-gradient",
            },
        ],
        image: Snapgram,
        source_code_link: "https://github.com/12haa/SnapGram",
        live_demo_link: "https://snap-gram-chi.vercel.app/",
    },
    {
        name: "TaskGuru",
        description:
            "A Professional Task manager webapp with Authentication which in users can  add , delete tasks and also add them to Completed and Important Categories.",
        tags: [
            {
                name: "NextJS",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "Blue-text-gradient",
            },
            {
                name: "ClerkJS ",
                color: "pink-text-gradient",
            },
        ],
        image: TaskGuru,
        source_code_link: "https://github.com/12haa/TaskGuru",
        live_demo_link: "https://task-guru-b7w3l95vi-mkhaefi2500-yahoocom.vercel.app/",
    },

    {
        name: "ChaTTy",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Sass",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: Editedfour,
        source_code_link: "https://github.com/12haa/Chatty",
        live_demo_link: "https://chatty-gold.vercel.app/login",
    },
    {
        name: "A Simple Netlfix Clone",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: Editedthree,
        source_code_link: "https://github.com/12haa/Netflix-APP",
        live_demo_link: "https://netflix-app-6ry8.vercel.app",
    },
    {
        name: "FitCLub",
        description:
            "A simple FitClub website A simple FitClub website A simple FitClub website A simple FitClub website A simple FitClub website .",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "JS",
                color: "green-text-gradient",
            },
            {
                name: "Css",
                color: "pink-text-gradient",
            },
        ],
        image: Editedtwo,
        source_code_link: "https://github.com/12haa/Fitclub-Website",
        live_demo_link: "https://fitclub-website-blush.vercel.app/",
    },
    {
        name: "NFT Website",
        description: "A simple NFT website with Animations .",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "Gsap , Swiper , React-Confetti",
                color: "pink-text-gradient",
            },
        ],
        image: NFT,
        source_code_link: "https://github.com/12haa/NFT-Website",
        live_demo_link: "https://nft-website-mocha.vercel.app/",
    },
    {
        name: "Simple ToDo App",
        description: "A simple ToDo webapp .",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "Gsap , Swiper , React-Confetti",
                color: "pink-text-gradient",
            },
        ],
        image: Todo,
        source_code_link: "https://github.com/12haa/Simple-ToDo-App",
        live_demo_link: "https://to-do-app-smoky-six.vercel.app/",
    },

    {
        name: "A Porfolio Sample",
        description: "A Simple Porfolio Sample",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            // {
            //   name: "RapidApi ",
            //   color: "pink-text-gradient",
            // },
        ],
        image: Porfolio,
        source_code_link: "https://github.com/12haa/portfolio-2",
        live_demo_link: "https://porfolio-rosy.vercel.app/",
    },

];

export {services, technologies, experiences, testimonials, projects};
