import ExperienceItem from './ExperienceItem';

const ExperiencesList = (props: IExpProp) => {
    return (
        <div className="container rounded">
            <h1>Experiences</h1>
            {props.experiences.map(({ ...expItem }) => {
                return (
                    <ExperienceItem
                        {...expItem}
                        key={expItem.title}
                    ></ExperienceItem>
                );
            })}
            <style jsx>
                {`
                    .container {
                        width: 430px;
                    }
                `}
            </style>
        </div>
    );
};

export default ExperiencesList;
