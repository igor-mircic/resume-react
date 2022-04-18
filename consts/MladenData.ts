import hiking from '../assets/hiking-pexels-andrei-tanase-1271619.jpg';
import gaming from '../assets/gaming-sam-pak-X6QffKLwyoQ-unsplash.jpg';
import scifi from '../assets/scifi-aideal-hwa-OYzbqk2y26c-unsplash.jpg';
import nr3d from '../assets/3d-javier-miranda-MrWOCGKFVDg-unsplash.jpg';
import engoo from '../assets/engoo-thumbnail.jpeg';
import acadsoc from '../assets/acadsoc-thumbnail.jpeg';
import haowj from '../assets/haowj-thumbnail.png';
import profPic from '../assets/mladen-profile-pic.jpg';
import project1 from '../assets/saitama-website.png';

export const MladenData: IData = {
    personInfo: {
        img: profPic,
        name: 'Mladen Stankovic',
        job: 'Front-end developer',
        email: 'mladen.stankovic@hotmail.com',
        phone: 381695335466,
        desc: 'Hello! My name is Mladen, and I am an aspiring web developer from Serbia.',
    },
    hobbies: [
        {
            img: hiking,
            title: 'Hiking',
            desc: "I'm an outdoorsy person, and very much enjoy hiking, camping, etc.",
        },

        {
            img: scifi,
            title: 'Science Fiction',
            desc: 'Science fiction is my favorite genre. I enjoy watching tv shows, reading books, playing video games - anything related to sci-fi.',
        },
        {
            img: gaming,
            title: 'Gaming',
            desc: 'Playing video games, but also board games, is one of my favorite pastimes.',
        },
        {
            img: nr3d,
            title: '3D sculpting and modeling',
            desc: "My newest hobby is 3D sculpting/modeling. It's an amazing way for me to express my creativity.",
        },
    ],
    experiences: [
        {
            img: haowj,
            dateStart: 'September 2020',
            dateEnd: 'August 2021',
            title: 'HAOWJ',
            desc: "I've worked in Haowj as an 'online english teacher'. This was my last teaching position, after which I had decided to pursue a career in web development.",
        },
        {
            img: acadsoc,
            dateStart: 'January 2019',
            dateEnd: 'July 2020',
            title: 'Acadsoc',
            desc: "I've worked in Acadsoc as an 'online english teacher'.",
        },
        {
            img: engoo,
            dateStart: 'July 2017',
            dateEnd: 'October 2018',
            title: 'Engoo',
            desc: "I've worked in Acadsoc as an 'online english teacher'. This was my first official teaching position.",
        },
    ],
    skills: [
        'javascript',
        'typescript',
        'html5',
        'css3',
        'nextjs',
        'git',
        'react',
        'vsc',
    ],
    projects: [
        {
            img: project1,
            tags: '#CSS #HTML #responsive #React #TypeScript',
            title: 'Resume page',
            desc: "This project is a portfolio and resume page in one. The technologies I've used include CSS, HTML, TypeScript, NextJS, StyledJSX, etc.",
            demoLink: 'https://resume-cicd.vercel.app/',
            codeLink: 'https://github.com/igor-mircic/resume',
        },
    ],
};
