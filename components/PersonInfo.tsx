import Image from 'next/image';
import { MdPhone, MdMail } from 'react-icons/md';

const PersonInfo = ({ img, name, job, email, phone, desc }: IPersonInfo) => {
    return (
        <div className={'rounded container person'}>
            <Image
                src={img}
                alt="profile picture"
                width={400}
                height={300}
                layout="responsive"
                priority
            />
            <h1>{name}</h1>
            <p>{job}</p>
            <div className="subContainer">
                <div className="flexContainer">
                    <MdMail size={26} />
                    <p>{email}</p>
                </div>
                <div className="flexContainer">
                    <MdPhone size={26} />
                    <p>{phone}</p>
                </div>
            </div>
            <p className="desc">{desc}</p>
            <style jsx>
                {`
                    .container {
                        width: 413px;
                        padding: 30px;
                        height: 643px;
                    }
                    h1 {
                        margin: 30px 0 0;
                        font-size: 40px;
                    }
                    .subContainer {
                        margin: 30px 0 16px;
                        padding-left: 0;
                    }
                    .flexContainer p {
                        color: var(--main-gray-font);
                        margin: 0 0 15px 20px;
                        display: flex;
                    }
                    .flexContainer {
                        display: flex;
                        padding: 0;
                    }

                    .desc {
                        margin: 0 0 10px;
                    }

                    @media screen and (max-width: 780px) {
                        .container {
                            width: 100%;
                            height: 100%;
                        }
                        .flexContainer p {
                            text-align: left;
                            overflow-wrap: anywhere;
                        }
                    }
                    @media screen and (max-width: 480px) {
                        .flexContainer p {
                            font-size: 4vw;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default PersonInfo;
