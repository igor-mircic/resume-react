// general
import type { NextPage } from 'next';
import Head from 'next/head';
// components
import PersonInfo from '../components/PersonInfo';
import ExperiencesList from '../components/ExperiencesList';
import HobbiesList from '../components/HobbiesList';
// data
import { personData } from '../consts/personData';
import SkillsList from '../components/SkillsList';

const Home: NextPage = () => {
    const { personInfo, experiences, hobbies } = personData;
    const skillsArr: string[] = ['javascript', 'typescript', 'html5'];
    return (
        <div>
            <Head>
                <title>{personData.personInfo.name}&apos;s resume</title>
                <meta name="description" content="Resume webpage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <PersonInfo {...personInfo}></PersonInfo>
                <SkillsList array={skillsArr} />
                <ExperiencesList {...{ experiences }}></ExperiencesList>
                <HobbiesList {...{ hobbies }}></HobbiesList>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
