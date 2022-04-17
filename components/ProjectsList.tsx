import ProjectItem from './ProjectItem';

const ProjectsList = ({ projects }: IProjectsProp) => {
    return (
        <div className="projects">
            <h1 className="container rounded">projects</h1>
            {projects.map(({ ...projectItem }) => {
                return (
                    <ProjectItem
                        {...projectItem}
                        key={projectItem.title}
                    ></ProjectItem>
                );
            })}
            <style jsx>
                {`
                    .container {
                        margin-bottom: 10px;
                        max-width: 900px;
                    }
                    .projects {
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectsList;
