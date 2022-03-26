export interface IHobbies {
    img?: StaticImageData;
    title: string;
    desc: string;
}

export const hobbies: IHobbies[] = [
    {
        title: 'Eating',
        desc: 'My favorite hobby is trying new kinds of food.'
    }, 
    {
        title: 'Going out for a walk',
        desc: 'I often go out for a stroll around the block. Sometimes it leads to a job.'
    },
    {
        title: 'Watching television',
        desc: 'I do not have a computer.'
    }
]