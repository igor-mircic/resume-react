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
                        margin: 0 0 30px;
                    }
                    .image {
                        padding: 0;
                        flex: 0 0 100px;
                        margin: 20px 20px 0;
                    }
                    h3 {
                        margin: 15px 0;
                    }
                    p:first-child {
                        font-size: 0.8em;
                        margin-bottom: 15px;
                    }
                    @media screen and (max-width: 780px) {
                        .image {
                            max-width: 100px;
                        }
                        .subContainer {
                            flex: 1 1 100px;
                            padding: 0 30px;
                        }
                        .container {
                            flex-direction: auto;
                        }
                        h3,
                        p {
                            text-align: center;
                            margin: 0 0;
                        }
                        p {
                            font-size: 1em;
                        }
                        p:last-child {
                            margin-top: 20px;
                        }
                    }
                    @media screen and (max-width: 470px) {
                        .container {
                            flex-direction: column;
                        }
                        .image {
                            margin: auto;
                            min-width: 100px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ExperienceItem;
