import food from '../assets/food.jpg';
import walk from '../assets/Take-A-Walk.jpg';
import tv from '../assets/watching-tv.jpg';
import crablante from '../assets/crablante.jpg';
import vaccman from '../assets/vaccine-man.jpg';
import marugori from '../assets/marugori.png';
import profPic from '../assets/one-punch-man.jpg';
import * as Di from 'react-icons/di';
import * as Si from 'react-icons/si';

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
};
// const html = require('react-icons/di/DiHtml5');
export const skills: object = {
    html5: Di.DiHtml5,
    bootstrap: Di.DiBootstrap,
    javascript: Di.DiJavascript1,
    typescript: Si.SiTypescript,
    react: Si.SiReact,
    redux: Si.SiRedux,
    angular: Si.SiAngular,
    css3: Si.SiCss3,
    git: Di.DiGit,
    sass: Di.DiSass,
    nextjs: Si.SiNextdotjs,
    styledcomponents: Si.SiStyledcomponents,
    vue: Si.SiVuedotjs,
};
