import {
    DiBootstrap,
    DiGit,
    DiHtml5,
    DiJavascript1,
    DiSass,
} from 'react-icons/di';
import {
    SiAngular,
    SiCss3,
    SiNextdotjs,
    SiReact,
    SiRedux,
    SiStyledcomponents,
    SiTypescript,
    SiVisualstudiocode,
    SiVuedotjs,
} from 'react-icons/si';

export const skills: Iskills = {
    html5: {
        icon: DiHtml5,
        skillName: 'HTML 5',
    },
    bootstrap: {
        icon: DiBootstrap,
        skillName: 'Bootstrap',
    },
    javascript: {
        icon: DiJavascript1,
        skillName: 'JavaScript',
    },
    typescript: {
        icon: SiTypescript,
        skillName: 'TypeScript',
    },
    react: {
        icon: SiReact,
        skillName: 'React',
    },
    redux: {
        icon: SiRedux,
        skillName: 'Redux',
    },
    angular: {
        icon: SiAngular,
        skillName: 'Angular',
    },
    css3: {
        icon: SiCss3,
        skillName: 'CSS 3',
    },
    git: {
        icon: DiGit,
        skillName: 'Git',
    },
    sass: {
        icon: DiSass,
        skillName: 'Sass',
    },
    nextjs: {
        icon: SiNextdotjs,
        skillName: 'Next.JS',
    },
    styledcomponents: {
        icon: SiStyledcomponents,
        skillName: 'Styled Components',
    },
    vue: {
        icon: SiVuedotjs,
        skillName: 'Vue.JS',
    },
    vsc: {
        icon: SiVisualstudiocode,
        skillName: 'Visual Studio Code',
    },
};
