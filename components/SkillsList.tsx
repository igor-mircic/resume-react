import { IconType } from 'react-icons';
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

export default SkillsList;
