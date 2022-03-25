import { ISingleExp } from "../consts/experiences";
import Image from "next/image";

const SingleExp = ({
  img,
  dateStart,
  dateEnd,
  jobTitle,
  jobDesc,
}: ISingleExp) => {
  return (
    <div>
      <Image
        src={img ? img : ""}
        alt="brand image"
        width={200}
        height={200}
        layout="fixed"
      />
      <p>
        {dateStart} - {dateEnd}
      </p>
      <p>{jobTitle}</p>
      <p>{jobDesc}</p>
    </div>
  );
};

const Experiences = (exps: ISingleExp[]) => {
  // console.log(typeof exps);
  // console.log(exps);
  // const expItems = exps.map(({ ...exp }) => {
  //   return <SingleExp {...exp} key={exp.jobTitle}></SingleExp>;
  // });
  const expItems = [];
  for (let [expKey, expValue] of Object.entries(exps)) {
    expItems.push(<SingleExp {...expValue} key={expKey}></SingleExp>);
    console.log(expKey, expValue);
  }
  return (
    <div>
      {
        expItems
        // () => {
        //   for (var exp of exps) {
        //     return <SingleExp {...exp} key={exp.jobTitle}></SingleExp>;
        //   }
        // }
      }
    </div>
  );
};

export default Experiences;
