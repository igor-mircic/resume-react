// general
import type { NextPage } from 'next';
import Head from 'next/head';
// components
import PersonInfo from '../components/PersonInfo';
import ExperiencesList from '../components/ExperiencesList';
import HobbiesList from '../components/HobbiesList';
// data
import { SaitamaData } from '../consts/SaitamaData';
import SkillsList from '../components/SkillsList';
import { useState } from 'react';

const Home: NextPage = () => {
    const [currentUser, setCurrentUser] = useState();

    const { personInfo, experiences, hobbies, skills } = personData;

    return (
        <div>
            <Head>
                <title>{personData.personInfo.name}&apos;s resume</title>
                <meta name="description" content="Resume webpage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <PersonInfo {...personInfo}></PersonInfo>
                <SkillsList array={skills} />
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
                `}
            </style>
        </div>
    );
};

export default Home;
