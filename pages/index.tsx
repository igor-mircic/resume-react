// general
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
// components
import PersonInfo from '../components/PersonInfo';
import ExperiencesList from '../components/ExperiencesList';
import HobbiesList from '../components/HobbiesList';
// data
import { personData } from '../consts/personData';

const Home: NextPage = () => {
  const { personInfo, experiences, hobbies } = personData;
  return (
    <div className={styles.container}>
      <Head>
        <title>{personData.personInfo.name}&apos;s resume</title>
        <meta name='description' content='Resume webpage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <PersonInfo {...personInfo}></PersonInfo>
        <ExperiencesList {...{ experiences }}></ExperiencesList>
        <HobbiesList {...{ hobbies }}></HobbiesList>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
