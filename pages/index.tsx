// general
import type { NextPage } from 'next';
import Head from 'next/head';
// components
import PersonInfo from '../components/PersonInfo';
import ExperiencesList from '../components/ExperiencesList';
import HobbiesList from '../components/HobbiesList';
import SkillsList from '../components/SkillsList';
import ProjectsList from '../components/ProjectsList';
// data
import { personData } from '../consts/personData';

const Home: NextPage = () => {
    const { personInfo, experiences, hobbies, skills, projects } = personData;

    return (
        <div className="layout">
            <Head>
                <title>{personData.personInfo.name}&apos;s resume</title>
                <meta name="description" content="Resume webpage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <PersonInfo {...personInfo}></PersonInfo>
                <SkillsList array={skills} />
                <ProjectsList {...{ projects }} />
                <ExperiencesList {...{ experiences }}></ExperiencesList>
                <HobbiesList {...{ hobbies }}></HobbiesList>
            </main>

            <footer>
                <p>
                    created by <span>{personInfo.name}</span> - devChallenges.io
                </p>
            </footer>
            <style jsx>
                {`
                    span {
                        color: var(--main-gray-font);
                    }
                    @media screen and (max-width: 780px) {
                        .layout {
                            max-width: 500px;
                            display: flex;
                            flex-direction: column;
                            margin: 0 auto;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
