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
                    }
                    .image {
                        width: 200px;
                        height: 200px;
                        padding: 0;
                        flex: 1 0 200px;
                    }
                    p:first-child {
                        margin-top: 0;
                    }
                    .subContainer {
                        padding: 0 0 15px 25px;
                    }
                    .subContainer p {
                        padding: 20px 0;
                    }
                    @media screen and (max-width: 767px) {
                        .image {
                            margin: 30px 10px 0 15px;
                            flex: 0 1 200px;
                        }
                        .experience {
                            height: 250px;
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
                            text-align: left;
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
