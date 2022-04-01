import Image from 'next/image';

const ExperienceItem = ({
    img,
    dateStart,
    dateEnd,
    title,
    desc,
}: IExperience) => {
    return (
        <div className="container">
            <Image
                src={img ? img : ''}
                alt="brand image"
                width={200}
                height={200}
                layout="fixed"
            />
            <div className="subContainer">
                <p>
                    {dateStart} - {dateEnd}
                </p>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <style jsx>
                {`
                    .container {
                        display: flex;
                    }
                    p:first-child {
                        margin-top: 0;
                    }
                    .subContainer {
                        flex: 20em;
                        padding: 0 0 15px 25px;
                    }
                `}
            </style>
        </div>
    );
};

export default ExperienceItem;
