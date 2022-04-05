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
                        padding: 5px 12px 0;
                        height: 50px;
                        max-width: 300px;
                        margin: 1.5px;
                        box-shadow: 0 10px 15px -5px;
                    }
                    .container p {
                        margin: 0 2px 5px 5px;
                    }
                `}
            </style>
        </div>
    );
};

export default SkillItem;
