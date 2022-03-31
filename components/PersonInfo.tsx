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
            <div>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <p>{desc}</p>
            <style jsx>
                {`
                    .container {
                        width: 500px;
                        height: 600px;
                    }
                    p {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
};

export default PersonInfo;
