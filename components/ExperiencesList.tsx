import ExperienceItem from './ExperienceItem';

const ExperiencesList = (props: IExpProp) => {
    return (
        <div className="container rounded experiences">
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
                        width: 413px;
                    }
                    h1 {
                        margin: 0 0 20px 10px;
                    }
                    @media screen and (max-width: 780px) {
                        .container {
                            width: 100%;
                            padding-bottom: 30px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ExperiencesList;
