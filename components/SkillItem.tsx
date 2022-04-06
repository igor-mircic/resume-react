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
                        flex: 0 0;
                        align-items: center;
                        border: 5px solid var(--main-gray-bkg);
                        border-radius: 25px;
                        padding: 5px 12px 0;
                        height: 50px;
                        max-width: 250px;
                        margin: 1.5px;
                        box-shadow: 0 10px 15px -5px;
                    }
                    .container p {
                        margin: 0 2px 5px 5px;
                        text-align: center;
                        white-space: nowrap;
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
