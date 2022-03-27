import Image from "next/image";
import { IPersonInfo } from "../consts/personInfo";

const PersonInfo = ({ img, name, job, email, phone, desc }: IPersonInfo) => {
  return (
    <div>
      <Image
        src={img}
        alt="profile picture"
        width={400}
        height={300}
        layout="fixed"
      />
      <h1>{name}</h1>
      <p>{job}</p>
      <div>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default PersonInfo;
