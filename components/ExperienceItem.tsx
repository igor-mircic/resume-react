import Image from 'next/image';

const ExperienceItem = ({
    img,
    dateStart,
    dateEnd,
    title,
    desc,
}: IExperience) => {
    return (
        <div className="container experience">
            <div className="image">
                <Image
                    src={img ? img : ''}
                    alt="brand image"
                    width={200}
                    height={200}
                    layout="responsive"
                />
            </div>

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
                        box-shadow: none;
                        padding: 0;
                        margin: 0 0 15px;
                    }
                    .image {
                        padding: 0;
                        flex: 0 0 100px;
                        margin: 20px 20px 0;
                    }
                    h3 {
                        margin: 15px 0;
                    }
                    @media screen and (max-width: 780px) {
                        .image {
                            flex: 0 1 100px;
                            margin-bottom: 10px;
                        }
                        .container {
                            flex-direction: column;
                        }
                        .subContainer {
                            flex: 1 1 100px;
                            padding: 0 30px;
                        }
                        h3,
                        p {
                            text-align: center;
                            margin: 0 0;
                        }
                        p {
                            font-size: 1em;
                        }
                        p:first-child {
                            font-size: 0.8em;
                            margin-bottom: 15px;
                        }
                        p:last-child {
                            margin-top: 20px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ExperienceItem;
