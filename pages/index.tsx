// general
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
// components
import PersonInfo from '../components/PersonInfo';
import ExperiencesList from '../components/ExperiencesList';
import HobbiesList from '../components/HobbiesList';
import SkillsList from '../components/SkillsList';
import UserList from '../components/UserList';
// data
import { SaitamaData } from '../consts/SaitamaData';
import { MladenData } from '../consts/MladenData';

interface IAllData {
    [key: string]: IData;
}
const allData: IAllData = {
    saitama: SaitamaData,
    mladen: MladenData,
};

const Home: NextPage = () => {
    const [currentUser, setCurrentUser] = useState(SaitamaData);
    const { personInfo, experiences, hobbies, skills } = currentUser;

    return (
        <div className="layout">
            <Head>
                <title>{currentUser.personInfo.name}&apos;s resume</title>
                <meta name="description" content="Resume webpage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <UserList
                    onClick={(value: string) => setCurrentUser(allData[value])}
                />
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
