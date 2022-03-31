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
        </div>
    );
};

export default HobbiesList;
