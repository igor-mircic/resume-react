import { IconType } from 'react-icons';

const SkillItem = ({ icon, skillName }: ISkillItem) => {
    const Icon = icon;
    return (
        <div className="container rounded">
            <Icon className="icon" size={26} />
            <p>{skillName}</p>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        background-color: var(--main-gray-bkg);
                        flex: 1 1;
                        align-items: center;
                        border: 5px solid var(--main-gray-bkg);
                        padding: 5px 12px 0;
                        height: 50px;
                        max-width: 250px;
                        margin: 1.5px;
                        box-shadow: 0 10px 15px -5px;
                    }
                    .container p {
                        margin: 0 2px 5px 5px;
                        text-align: center;
                    }
                    .icon {
                        margin-right: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default SkillItem;
