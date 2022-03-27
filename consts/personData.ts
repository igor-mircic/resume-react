import food from "../assets/food.jpg";
import walk from "../assets/Take-A-Walk.jpg";
import tv from "../assets/watching-tv.jpg";
import crablante from "../assets/crablante.jpg";
import vaccman from "../assets/vaccine-man.jpg";
import marugori from "../assets/marugori.png";
import profPic from "../assets/one-punch-man.jpg";

// interfaces
export interface IPersonInfo {
  img: StaticImageData;
  name: string;
  job: string;
  email: string;
  phone: number;
  desc: string;
}
export interface IHobbies {
  img?: StaticImageData;
  title: string;
  desc: string;
}
export interface IExperience {
  img?: StaticImageData;
  dateStart: string;
  dateEnd: string;
  jobTitle: string;
  jobDesc: string;
}
interface IData {
  personInfo: IPersonInfo;
  hobbies: IHobbies[];
  experiences: IExperience[];
}

// data
export const personData: IData = {
  personInfo: {
    img: profPic,
    name: "Saitama",
    job: "C class hero",
    email: "saitama@kickass.com",
    phone: 1234567,
    desc: "Hello. My name is Saitama, and I do 100 pushups, situps, and squats, followed by a 10km run daily.",
  },
  hobbies: [
    {
      img: food,
      title: "Eating",
      desc: "My favorite hobby is trying new kinds of food.",
    },
    {
      img: walk,
      title: "Going out for a walk",
      desc: "I often go out for a stroll around the block. Sometimes it leads to a job.",
    },
    {
      img: tv,
      title: "Watching television",
      desc: "I do not have a computer.",
    },
  ],
  experiences: [
    {
      img: vaccman,
      dateStart: "Season 1, Episode 1",
      dateEnd: "Season 1, Episode 1",
      jobTitle: "Vaccine Man",
      jobDesc: "I punched Vaccine Man, and he burst all over the place.",
    },
    {
      img: crablante,
      dateStart: "Season 1, Episode 1",
      dateEnd: "Season 1, Episode 1",
      jobTitle: "Crablante",
      jobDesc: "I slapped Crablante, and he splattered all over the wall.",
    },
    {
      img: marugori,
      dateStart: "Season 1, Episode 2",
      dateEnd: "Season 1, Episode 2",
      jobTitle: "Marugori",
      jobDesc: "I punched Marugori, and his head exploded all over the place.",
    },
  ],
};
