import ProjectItem from './ProjectItem';
import FilterButton from './FilterButton';
import { useState } from 'react';

const ProjectsList = ({ projects }: IProjectsProp) => {
    const [activeFilter, setActiveFilter] = useState('all');
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
                        dataset="ts"
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    >
                        TypeScript
                    </FilterButton>
                    <FilterButton
                        className="filter_btn"
                        dataset="mui"
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    >
                        MaterialUI
                    </FilterButton>
                </div>
            </div>
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
