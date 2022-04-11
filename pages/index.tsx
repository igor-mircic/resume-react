// general
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
// components
import PersonInfo from '../components/PersonInfo';
import ExperiencesList from '../components/ExperiencesList';
import HobbiesList from '../components/HobbiesList';
import SkillsList from '../components/SkillsList';
// data
import { SaitamaData } from '../consts/SaitamaData';
import { MladenData } from '../consts/MladenData';
import UserList from '../components/UserList';

const Home: NextPage = () => {
    const [currentUser, setCurrentUser] = useState(SaitamaData);
    // const [name, setName] = useState(currentUser.personInfo.name);
    // const changeName = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     setName(currentUser.personInfo.name);
    // }
    const func = (e: React.MouseEvent<HTMLElement>) => {
        switch (e.currentTarget.dataset.value) {
            case 'saitama':
                setCurrentUser((currentUser) => SaitamaData);
                break;
            case 'mladen':
                setCurrentUser((currentUser) => MladenData);
                break;
        }
    };
    const { personInfo, experiences, hobbies, skills } = currentUser;

    return (
        <div className="layout">
            <Head>
                <title>{currentUser.personInfo.name}&apos;s resume</title>
                <meta name="description" content="Resume webpage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <UserList name={currentUser.personInfo.name} func={func} />
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
