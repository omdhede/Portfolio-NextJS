import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from '@/components/Skills';
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Head>
        <title>Om's Portfolio</title>
      </Head>

        {/*Header*/}
        <Header />

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
