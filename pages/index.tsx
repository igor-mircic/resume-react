import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { personInfo } from "../consts/personInfo";
import PersonInfo from "../components/PersonInfo";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{personInfo.name} resume</title>
        <meta name="description" content="Resume webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PersonInfo
          img={personInfo.img}
          name={personInfo.name}
          job={personInfo.job}
          email={personInfo.email}
          phone={personInfo.phone}
          desc={personInfo.desc}
        ></PersonInfo>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
