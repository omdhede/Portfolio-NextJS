import { Skill } from "@/typings";

export const fetchSkills = async () => {
	let res;
	try {
		res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
	} catch (error) {
		console.error(
			"An error occurred while fetching the skills from BASE_URL:",
			error
		);
	}

	if (!res || !res.ok) {
		try {
			res = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getSkills`);
		} catch (error) {
			console.error(
				"An error occurred while fetching the skills from DEPLOY_URL:",
				error
			);
			return [];
		}
	}

	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}

	const data = await res.json();
	const skills: Skill[] = data.skills;

	return skills;
};
