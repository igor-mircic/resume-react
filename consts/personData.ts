import food from '../assets/food.jpg';
import walk from '../assets/Take-A-Walk.jpg';
import tv from '../assets/watching-tv.jpg';
import crablante from '../assets/crablante.jpg';
import vaccman from '../assets/vaccine-man.jpg';
import marugori from '../assets/marugori.png';
import profPic from '../assets/one-punch-man.jpg';
import project1 from '../assets/saitama-website.png';

export const personData: IData = {
    personInfo: {
        img: profPic,
        name: 'Saitama',
        job: 'C class hero',
        email: 'saitama@kickass.com',
        phone: 1234567,
        desc: 'Hello. My name is Saitama, and I do 100 pushups, situps, and squats, followed by a 10km run daily.',
    },
    hobbies: [
        {
            img: food,
            title: 'Eating',
            desc: 'My favorite hobby is trying new kinds of food.',
        },
        {
            img: walk,
            title: 'Going out for a walk',
            desc: 'I often go out for a stroll around the block. Sometimes it leads to a job.',
        },
        {
            img: tv,
            title: 'Watching television',
            desc: 'I do not have a computer.',
        },
    ],
    experiences: [
        {
            img: vaccman,
            dateStart: 'Season 1, Episode 1',
            dateEnd: 'Season 1, Episode 1',
            title: 'Vaccine Man',
            desc: 'I punched Vaccine Man, and he burst all over the place.',
        },
        {
            img: crablante,
            dateStart: 'Season 1, Episode 1',
            dateEnd: 'Season 1, Episode 1',
            title: 'Crablante',
            desc: 'I slapped Crablante, and he splattered all over the wall.',
        },
        {
            img: marugori,
            dateStart: 'Season 1, Episode 2',
            dateEnd: 'Season 1, Episode 2',
            title: 'Marugori',
            desc: 'I punched Marugori, and his head exploded all over the place.',
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
        'styledcomponents',
    ],
    projects: [
        {
            img: project1,
            tags: ['css', 'html', 'responsive', 'react', 'typescript'],
            title: 'Resume page',
            desc: "This project is a portfolio and resume page in one. The technologies I've used include CSS, HTML, TypeScript, NextJS, StyledJSX, etc.",
            demoLink: 'https://resume-cicd.vercel.app/',
            codeLink: 'https://github.com/igor-mircic/resume',
        },
    ],
};
