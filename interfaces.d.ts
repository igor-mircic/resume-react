interface IPersonInfo {
    img: StaticImageData;
    name: string;
    job: string;
    email: string;
    phone: number;
    desc: string;
}
interface IHobbies {
    img?: StaticImageData;
    title: string;
    desc: string;
}
interface IExperience extends IHobbies {
    dateStart: string;
    dateEnd: string;
}
interface IProject extends IHobbies {
    tags: string;
    demoLink: string;
    codeLink: string;
}
interface IData {
    personInfo: IPersonInfo;
    hobbies: IHobbies[];
    experiences: IExperience[];
    skills: string[];
    projects: IProject[];
}
interface IHobbyProp {
    hobbies: IHobbies[];
}
interface IExpProp {
    experiences: IExperience[];
}
interface IProjectsProp {
    projects: IProject[];
}
interface IArray {
    value: IExperience[] | IHobbies[];
}
interface ISkillItem {
    icon: IconType;
    skillName: string;
}
interface Iskills {
    [key: string]: ISkillItem;
}
