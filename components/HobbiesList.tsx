import HobbyItem from './HobbyItem';

const HobbiesList = (props: IHobbyProp) => {
    return (
        <div className="container rounded">
            <h1>Hobbies</h1>
            {props.hobbies.map(({ ...hobbyItem }) => {
                return (
                    <HobbyItem {...hobbyItem} key={hobbyItem.title}></HobbyItem>
                );
            })}
            <style jsx>
                {`
                    .container {
                        width: 362px;
                        padding-bottom: 40px;
                    }
                    h1 {
                        margin-left: 20px;
                    }
                    @media screen and (max-width: 767px) {
                        .container {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default HobbiesList;
