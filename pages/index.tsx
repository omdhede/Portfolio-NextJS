"use client"

import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import ThemeSwitch from "@/components/ThemeSwitch";
import { GetStaticProps } from "next";
import { PageInfo, Experience, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
// import pageInfo from "@/sanity/schemas/pageInfo";



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, socials, skills, projects }: Props) => {
  return (
		<div className="dark:bg-gradient-to-tr dark:from-[#41565F] dark:to-[#000000] bg-gradient-to-bl from-[#9FFFFF] to-[#FFFFFF] dark:text-white text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-[#41565F]/80 z-0">
			<Head>
				<title>
					Portfolio
				</title>
			</Head>

			{/*Header*/}
			<Header socials={socials} />

			{/*Hero*/}
			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>

			{/*About*/}
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			{/*Experience*/}
			<section id="experience" className="snap-center">
				<WorkExperience experiences={experiences} />
			</section>

			{/*Skills*/}
			<section id="skills" className="snap-start">
				<Skills skills={skills} />
			</section>

			{/*Projects*/}
			<section id="projects" className="snap-center">
				<Projects projects={projects} />
			</section>

			{/*Contact Me*/}
			<section id="contact" className="snap-start">
				<ContactMe pageInfo={pageInfo} />
			</section>

			<section>
				<ThemeSwitch />
			</section>

			{/*<Link href="#hero">*/}
			{/*  <footer className="sticky bottom-5 w-full cursor-pointer">*/}
			{/*    <div className="flex items-center justify-center">*/}
			{/*      <img*/}
			{/*        className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"*/}
			{/*        src={urlFor(pageInfo?.heroImage).url()}*/}
			{/*        alt=""*/}
			{/*      />*/}
			{/*    </div>*/}
			{/*  </footer>*/}
			{/*</Link>*/}
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
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
			revalidate: 60,
		};
	} catch (err) {
		console.error(err);
		return {
			notFound: true,
		};
	}
};