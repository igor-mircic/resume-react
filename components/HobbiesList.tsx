import HobbyItem from "./HobbyItem";
import { IHobbies } from "../consts/hobbies";

interface IHobbyProp {
  hobbies: IHobbies[];
}

const HobbiesList = (props: IHobbyProp) => {
  return (
    <div>
      <h1>Hobbies</h1>
      {props.hobbies.map(({ ...hobbyItem }) => {
        return <HobbyItem {...hobbyItem} key={hobbyItem.title}></HobbyItem>;
      })}
    </div>
  );
};

export default HobbiesList;
