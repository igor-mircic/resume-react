import food from '../assets/food.jpg'
import walk from '../assets/Take-A-Walk.jpg'
import tv from '../assets/watching-tv.jpg'

export interface IHobbies {
    img?: StaticImageData;
    title: string;
    desc: string;
}

export const hobbies: IHobbies[] = [
    {
        img: food,
        title: 'Eating',
        desc: 'My favorite hobby is trying new kinds of food.'
    }, 
    {
        img: walk,
        title: 'Going out for a walk',
        desc: 'I often go out for a stroll around the block. Sometimes it leads to a job.'
    },
    {
        img: tv,
        title: 'Watching television',
        desc: 'I do not have a computer.'
    }
]