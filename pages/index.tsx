// general
import type { NextPage } from 'next';
import Head from 'next/head';
// components
import PersonInfo from '../components/PersonInfo';
import ExperiencesList from '../components/ExperiencesList';
import HobbiesList from '../components/HobbiesList';
import SkillsList from '../components/SkillsList';
import ProjectsList from '../components/ProjectsList';
import Footer from '../components/Footer';
// data
import { MladenData } from '../consts/MladenData';

const Home: NextPage = () => {
    const { personInfo, experiences, hobbies, skills, projects } = MladenData;

    return (
        <div className="layout">
            <Head>
                <title>{MladenData.personInfo.name}&apos;s resume</title>
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

            <Footer name={personInfo.name}></Footer>
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
