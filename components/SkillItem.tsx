import { IconType } from 'react-icons';

interface ISkillItem {
    icon: IconType;
    skillName: string;
}

const SkillItem = ({ icon, skillName }: ISkillItem) => {
    const Icon = icon;
    return (
        <div className="container">
            <div>
                <Icon size={26} />
            </div>
            <p>{skillName}</p>
            <style jsx>
                {`
                    .container {
                        display: flex;
                    }
                `}
            </style>
        </div>
    );
};

export default SkillItem;
