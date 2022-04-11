import { skills } from '../consts/skills';
import SkillItem from './SkillItem';

interface IProps {
    array: string[];
}

const SkillsList = (props: IProps) => {
    const skillArray: ISkillItem[] = props.array.map((skill) => {
        const { skillName, icon } = skills[skill];
        return { skillName, icon };
    });

    return (
        <div className="container rounded skills">
            <h1>Skills</h1>
            {skillArray.map(({ skillName, icon }) => {
                return (
                    <SkillItem
                        skillName={skillName}
                        icon={icon}
                        key={skillName}
                    />
                );
            })}
            <style jsx>
                {`
                    .container {
                        height: 100%;
                        max-width: 900px;
                        justify-content: center;
                        display: flex;
                        flex: wrap;
                        flex-wrap: wrap;
                    }
                    h1 {
                        margin: 0 0 15px 15px;
                        flex: 1 0 100%;
                    }
                    @media screen and (max-width: 780px) {
                        .container {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default SkillsList;
