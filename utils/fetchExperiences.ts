import { Experience } from "@/typings";

export const fetchExperiences = async () => {
	let res;
	try {
		res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
	} catch (error) {
		console.error(
			"An error occurred while fetching the experiences from BASE_URL:",
			error
		);
	}

	if (!res || !res.ok) {
		try {
			res = await fetch(
				`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getExperiences`
			);
		} catch (error) {
			console.error(
				"An error occurred while fetching the experiences from DEPLOY_URL:",
				error
			);
			return [];
		}
	}

	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}

	const data = await res.json();
	const experiences: Experience[] = data.experiences;

	return experiences;
};
