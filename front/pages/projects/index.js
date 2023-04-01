import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<kanbana-front>/styles/Home.module.css'
import ProjectCard from "<kanbana-front>/pages/component/projectCard";
import NavBar from "<kanbana-front>/pages/component/navBar";

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
    return (
        <>
            <Head>
                <title>My Projects</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <main className={styles.projects}>
                <ProjectCard title="Certus development"></ProjectCard>
                <ProjectCard title="Wovon Telegram"></ProjectCard>
            </main>
        </>
    )
}