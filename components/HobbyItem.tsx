import Image from 'next/image';

const HobbyItem = ({ img, title, desc }: IHobbies) => {
    return (
        <div>
            <Image
                src={img ? img : ''}
                alt="brand image"
                width={300}
                height={200}
                layout="fixed"
            />
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
                `}
            </style>
        </div>
    );
};

export default HobbyItem;
