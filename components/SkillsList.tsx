import { IconType } from 'react-icons';
import { skills } from '../consts/skills';
import SkillItem from './SkillItem';

interface IArray {
    name: string;
    icon: IconType;
}
interface IProps {
    array: string[];
}

const SkillsList = (props: IProps) => {
    const skillArray: IArray[] = props.array.map((skill) => {
        for (const [key, value] of Object.entries(skills)) {
            if (skill === key) {
                return { name: key, icon: value };
            }
        }
    }) as unknown as IArray[];

    return (
        <div className="container rounded">
            {skillArray.map(({ name, icon }) => {
                return <SkillItem skillName={name} icon={icon} key={name} />;
            })}
            <style jsx>
                {`
                    .container {
                        height: 100%;
                        max-width: 552px;
                        justify-content: center;
                        display: flex;
                        flex: wrap;
                        flex-wrap: wrap;
                    }
                    h1 {
                        margin-left: 20px;
                    }
                `}
            </style>
        </div>
    );
};

export default SkillsList;
