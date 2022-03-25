import crablante from '../assets/crablante.jpg'
import vaccman from '../assets/vaccine-man.jpg'
import marugori from '../assets/marugori.png'

export interface IExperience {
    img?: StaticImageData;
    dateStart: string;
    dateEnd: string;
    jobTitle: string;
    jobDesc: string;
}

export const experiences: IExperience[] = [
    {
        img: vaccman,
        dateStart: "Season 1, Episode 1",
        dateEnd: "Season 1, Episode 1",
        jobTitle: "Vaccine Man",
        jobDesc: "I punched Vaccine Man, and he burst all over the place."
    },
    {
        img: crablante,
        dateStart: "Season 1, Episode 1",
        dateEnd: "Season 1, Episode 1",
        jobTitle: "Crablante",
        jobDesc: "I slapped Crablante, and he splattered all over the wall."
    },
    {
        img: marugori,
        dateStart: "Season 1, Episode 2",
        dateEnd: "Season 1, Episode 2",
        jobTitle: "Marugori",
        jobDesc: "I punched Marugori, and his head exploded all over the place."
    }];