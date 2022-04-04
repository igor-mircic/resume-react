import { IconType } from 'react-icons';

interface ISkillItem {
    icon: IconType;
    skillName: string;
}

const SkillItem = ({ icon, skillName }: ISkillItem) => {
    const Icon = icon;
    return (
        <div className="container rounded">
            <div>
                <Icon size={26} />
            </div>
            <p>{skillName}</p>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        background-color: var(--main-gray-bkg);
                        flex: 0 0 150px;
                        align-items: center;
                        border: 5px solid var(--main-gray-bkg);
                        padding: 0;
                        height: 50px;
                        width: 200px;
                        margin: 1px;
                    }
                `}
            </style>
        </div>
    );
};

export default SkillItem;
