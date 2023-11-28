import { Skill } from "@/typings";

export const fetchSkills = async () => {
	try {
		let res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
		);

		if (!res.ok) {
			res = await fetch(
				`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getExperiences`
			);

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}
		}

		const data = await res.json();
		const skills: Skill[] = data.skills;

		return skills;
	} catch (error) {
		console.error("An error occurred while fetching the skills:", error);
		return [];
	}
};
