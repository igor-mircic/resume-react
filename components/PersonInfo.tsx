import Image from 'next/image';
import { MdPhone, MdMail } from 'react-icons/md';

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
                <div className="flexContainer">
                    <div>
                        <MdMail size={26} />
                    </div>
                    <p>{email}</p>
                </div>
                <div className="flexContainer">
                    <div>
                        <MdPhone size={26} />
                    </div>
                    <p>{phone}</p>
                </div>
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
                    .subContainer {
                        padding: 5px 0 20px;
                    }
                    .subContainer p {
                        color: var(--main-gray-font);
                        margin-bottom: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .flexContainer {
                        display: flex;
                        padding: 0;
                    }
                    .flexContainer div {
                        padding: 15px 15px 15px 0;
                    }
                    .subContainer p {
                        color: var(--main-gray-font);
                        margin-bottom: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    );
};

export default PersonInfo;
