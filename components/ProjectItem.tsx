import Image from 'next/image';

const ProjectItem = ({
    img,
    tags,
    title,
    desc,
    demoLink,
    codeLink,
}: IProject) => {
    return (
        <div className="container rounded">
            <div className="image">
                <Image
                    src={img ? img : ''}
                    alt="brand image"
                    width={200}
                    height={200}
                    layout="fixed"
                />
            </div>

            <div className="subContainer">
                <p className="tags">{tags}</p>
                <h3 className="title">{title}</h3>
                <p>{desc}</p>
                <div className="linkContainer">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="demo"
                    >
                        Demo
                    </a>
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="code"
                    >
                        Code
                    </a>
                </div>
            </div>
            <style jsx>
                {`
                    .container {
                        padding: 0;
                        margin-bottom: 15px;
                        max-width: 900px;
                        display: flex;
                    }
                    .linkContainer {
                        display: flex;
                        margin: 35px 0 0;
                        padding: 10px;
                        justify-content: left;
                    }
                    .title {
                        margin-bottom: 15px;
                        font-size: 24px;
                    }
                    .tags {
                        margin: 15px 0 35px;
                    }
                    .code,
                    .demo {
                        width: 136px;
                        height: 46px;
                        border-radius: 12px;
                        font-size: 18px;
                        font-weight: 500;
                        text-align: center;
                        padding: inherit;
                    }
                    .code:hover,
                    .demo:hover {
                        background-color: var(--light-blue);
                        cursor: pointer;
                    }
                    .demo {
                        background-color: var(--main-blue);
                        color: white;
                        margin-right: 10px;
                    }
                    .code {
                        color: var(--main-blue);
                        border: 1px solid var(--main-blue);
                    }
                    .image {
                        border-radius: 12px;
                        margin-top: 30px;
                    }
                    @media screen and (max-width: 1080px) {
                        .container {
                            flex-direction: column;
                            width: 100%;
                        }
                        .image {
                            margin: auto;
                        }
                        .linkContainer {
                            justify-content: center;
                        }
                        .code,
                        .demo {
                            width: 30%;
                            height: 30%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectItem;
