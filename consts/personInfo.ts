import profPic from '../assets/one-punch-man.jpg';

export interface IPersonInfo {
    img: StaticImageData;
    name: string;
    job: string;
    email: string;
    phone: number;
    desc: string;
  }
export const personInfo: IPersonInfo = {
    img: profPic,
    name: 'Saitama',
    job: 'C class hero',
    email: 'saitama@kickass.com',
    phone: 1234567,
    desc: 'Hello. My name is Saitama, and I do 100 pushups, situps, and squats, followed by a 10km run daily.'
}