import Image from 'next/image';
import LinkButton from './LinkButton';

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
                    height={220}
                    layout="fixed"
                />
            </div>

            <div className="subContainer">
                <p className="tags">{tags}</p>
                <h3 className="title">{title}</h3>
                <p>{desc}</p>
                <div className="linkContainer">
                    <LinkButton className="demo btn" link={demoLink}>
                        Demo
                    </LinkButton>
                    <LinkButton className="code btn" link={codeLink}>
                        Code
                    </LinkButton>
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
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectItem;
