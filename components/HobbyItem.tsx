import Image from 'next/image';

const HobbyItem = ({ img, title, desc }: IHobbies) => {
    return (
        <div className="hobby">
            <div className="image">
                <Image
                    src={img ? img : ''}
                    alt="brand image"
                    width={300}
                    height={200}
                    layout="responsive"
                />
            </div>

            <h3>{title}</h3>
            <p>{desc}</p>
            <style jsx>
                {`
                    h3 {
                        margin: 15px 0;
                    }
                    h3,
                    p {
                        margin-left: 15px;
                    }
                    @media screen and (max-width: 767px) {
                        .hobby .image {
                            margin: 30px 0 0 15px;
                        }
                        h3,
                        p {
                            text-align: center;
                            margin-left: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default HobbyItem;
