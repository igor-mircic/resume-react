import ExperienceItem from "./ExperienceItem";

const ExperiencesList = (props: IExpProp) => {
  return (
    <div>
      <h1>Experiences</h1>
      {props.experiences.map(({ ...expItem }) => {
        return (
          <ExperienceItem {...expItem} key={expItem.jobTitle}></ExperienceItem>
        );
      })}
    </div>
  );
};

export default ExperiencesList;
