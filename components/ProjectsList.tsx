import ProjectItem from './ProjectItem';
import FilterButton from './FilterButton';
import { useEffect, useState } from 'react';

const ProjectsList = ({ projects }: IProjectsProp) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [projectList, setProjectList] = useState<JSX.Element[]>();
    useEffect(() => {
        // if (activeFilter === 'all') {
        //     setProjectList((): JSX.Element[] => {
        //         return projects.map(({ ...projectItem }) => {
        //             return (
        //                 <ProjectItem
        //                     {...projectItem}
        //                     key={projectItem.title}
        //                 ></ProjectItem>
        //             );
        //         });
        //     });
        // }
        switch (activeFilter) {
            case 'all':
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
                break;
            case 'nextjs':
            case 'typescript':
            case 'materialui':
                const result = projects.filter((obj) =>
                    obj.tags.includes(activeFilter)
                );
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
                break;
            default:
                alert('These are not the droids you are looking for.');
        }
    }, [activeFilter]);

    return (
        <div className="projects">
            <div className="container rounded">
                <h1>projects</h1>
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
