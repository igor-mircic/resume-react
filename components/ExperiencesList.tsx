import ExperienceItem from './ExperienceItem';

const ExperiencesList = (props: IExpProp) => {
    return (
        <div className={'rounded'}>
            <h1>Experiences</h1>
            {props.experiences.map(({ ...expItem }) => {
                return (
                    <ExperienceItem
                        {...expItem}
                        key={expItem.title}
                    ></ExperienceItem>
                );
            })}
        </div>
    );
};

export default ExperiencesList;
