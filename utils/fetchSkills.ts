import { Skill } from "@/typings";

export const fetchSkills = async () => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
		);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();
		const skills: Skill[] = data.skills;

		// console.log("fetching", skills);

		return skills;
	} catch (error) {
		console.error("An error occurred while fetching the skills:", error);
		return [];
	}
};
