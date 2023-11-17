import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from '@/components/Skills';
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import {GetStaticProps} from "next";
import { PageInfo, Experience, Project, Skill, Social } from "@/typings";
import {fetchPageInfo} from "@/utils/fetchPageInfo";
import {fetchExperiences} from "@/utils/fetchExperiences";
import {fetchSkills} from "@/utils/fetchSkills";
import {fetchProjects} from "@/utils/fetchProjects";
import {fetchSocials} from "@/utils/fetchSocials";

const inter = Inter({ subsets: ['latin'] })

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}

const Home = ({ pageInfo, experiences, socials, skills, projects }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Head>
        <title>Om's Portfolio</title>
      </Head>

        {/*Header*/}
        <Header socials={{socials}}/>

        {/*Hero*/}
        <section id="hero" className="snap-start">
            <Hero />
        </section>

        {/*About*/}
        <section id="about" className="snap-center">
            <About />
        </section>

        {/*Experience*/}
        <section id="experience" className="snap-center">
            <WorkExperience />
        </section>

        {/*Skills*/}
        <section id='skills' className="snap-start">
            <Skills />
        </section>

        {/*Projects*/}
        <section id='projects' className="snap-center">
            <Projects />
        </section>

        {/*Contact Me*/}
        <section id='contact' className="snap-start">
            <ContactMe />
        </section>

        <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer'>
                <div className='flex items-center justify-center'>
                    <img className='h-10 w-10 rounded-full fiter grayscale hover:grayscale-0 cursor-pointer' src='https://images.pexels.com/photos/3158814/pexels-photo-3158814.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'  alt=''/>
                </div>
            </footer>
        </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        revalidate: 10,
    }
}
