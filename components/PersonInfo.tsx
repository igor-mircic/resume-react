import Image from "next/image";
import React, { FC } from "react";

export interface IPersonInfo {
  img: string;
  name: string;
  job: string;
  email: string;
  phone: number;
  //   contact: {
  //       email: string;
  //       phone: number;
  //   };
  desc: string;
}

const PersonInfo: FC<IPersonInfo> = (props) => {
  return (
    <div>
      <Image src={props.img} alt="profile picture" width={400} height={300} />
      <p>{props.name}</p>
      <p>{props.job}</p>
      <div>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
      <p>{props.desc}</p>
      {/* <contact>
                <mailContainer>
                    <icon></icon>
                    <email props={contact.mail.email}></email>
                </mailContainer>
                <phoneContainer>
                    <icon></icon>
                    <phone props={contact.phone.phone}></phone>
                </phoneContainer>
            </contact> */}
    </div>
  );
};

export default PersonInfo;
