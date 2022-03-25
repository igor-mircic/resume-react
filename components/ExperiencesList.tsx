import { IExperience } from '../consts/experiences';
import { ExperienceItem } from './ExperienceItem';

interface props {
  experienceArray: IExperience[];
}

const ExperienceList = ({ experienceArray }: props) => {
  return (
    <div>
      {experienceArray.map((x) => (
        <ExperienceItem key={x.jobTitle} {...x} />
      ))}
    </div>
  );
};

export default ExperienceList;
