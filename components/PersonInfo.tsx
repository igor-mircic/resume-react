import Image from 'next/image';

const PersonInfo = ({ img, name, job, email, phone, desc }: IPersonInfo) => {
    return (
        <div className={'rounded container'}>
            <Image
                src={img}
                alt="profile picture"
                width={400}
                height={300}
                layout="fixed"
                priority
            />
            <h1>{name}</h1>
            <p>{job}</p>
            <div className="subContainer">
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <p>{desc}</p>
            <style jsx>
                {`
                    .container {
                        width: 460px;
                        padding: 30px 30px 20px;
                    }
                    p {
                        margin-top: 0;
                    }
                    h1 {
                        margin-bottom: 0;
                        font-size: 40px;
                    }
                    .subContainer p {
                        color: var(--main-gray-font);
                    }
                `}
            </style>
        </div>
    );
};

export default PersonInfo;
