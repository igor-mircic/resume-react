import Image from "next/image";
import { IHobbies } from "../consts/hobbies";

const HobbyItem = ({ img, title, desc }: IHobbies) => {
  return (
    <div>
      {/* <Image
        src={img ? img : ""}
        alt="brand image"
        width={200}
        height={200}
        layout="fixed"
      /> */}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default HobbyItem;
