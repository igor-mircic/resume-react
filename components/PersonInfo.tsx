import Image from "next/image";

interface Props {
  img: string;
  name: string;
  job: string;
  //   contact: object;
  //   mail: object;
  email: string;
  //   telephone: object;
  phone: number;

  //   contact: {
  //     mail: {
  //       email: string;
  //     };
  //     phone: {
  //       phone: number;
  //     };
  //   };
  desc: string;
}

const PersonInfo = (props: Props) => {
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
      {/* <contact props={contact}>
                <mailContainer props={contact.mail}>
                    <icon props={contact.mail.icon}></icon>
                    <email props={contact.mail.email}></email>
                </mailContainer>
                <phoneContainer props={contact.phone}>
                    <icon props={contact.phone.icon}></icon>
                    <phone props={contact.phone.phone}></phone>
                </phoneContainer>
            </contact> */}
    </div>
  );
};

export default PersonInfo;
