import Image from "next/image";

const ExperienceItem = ({
  img,
  dateStart,
  dateEnd,
  jobTitle,
  jobDesc,
}: IExperience) => {
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
      <h3>{jobTitle}</h3>
      <p>{jobDesc}</p>
    </div>
  );
};

export default ExperienceItem;
