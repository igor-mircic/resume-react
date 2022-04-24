import ProjectItem from './ProjectItem';
import FilterButton from './FilterButton';
import { useEffect, useState } from 'react';

const ProjectsList = ({ projects }: IProjectsProp) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [projectList, setProjectList] = useState<JSX.Element[]>();
    const [projectNumber, setProjectNumber] = useState(0);
    useEffect(() => {
        if (activeFilter == 'all') {
            setProjectNumber(projects.length);
            setProjectList((): JSX.Element[] => {
                return projects.map(({ ...projectItem }) => {
                    return (
                        <ProjectItem
                            {...projectItem}
                            key={projectItem.title}
                        ></ProjectItem>
                    );
                });
            });
            return;
        }
        const result = projects.filter((obj) =>
            obj.tags.includes(activeFilter)
        );
        setProjectNumber(result.length);
        setProjectList((): JSX.Element[] => {
            return result.map(({ ...projectItem }) => {
                return (
                    <ProjectItem
                        {...projectItem}
                        key={projectItem.title}
                    ></ProjectItem>
                );
            });
        });
    }, [activeFilter]);

    return (
        <div className="projects">
            <div className="container rounded">
                <h1>projects ({projectNumber})</h1>
                <div className="filter">
                    <FilterButton
                        className="filter_btn"
                        dataset="all"
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    >
                        All
                    </FilterButton>
                    <FilterButton
                        className="filter_btn"
                        dataset="nextjs"
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    >
                        NextJS
                    </FilterButton>
                    <FilterButton
                        className="filter_btn"
                        dataset="typescript"
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    >
                        TypeScript
                    </FilterButton>
                    <FilterButton
                        className="filter_btn"
                        dataset="materialui"
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    >
                        MaterialUI
                    </FilterButton>
                </div>
            </div>
            {projectList}
            <style jsx>
                {`
                    .container {
                        margin-bottom: 10px;
                        max-width: 900px;
                        display: flex;
                        flex-direction: column;
                    }
                    .projects {
                        margin: 0;
                        padding: 0;
                    }
                    .projects button:hover {
                        transform: scale(1.5);
                    }
                    @media screen and (max-width: 780px) {
                        .container {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectsList;
