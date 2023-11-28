import { Experience } from "@/typings";

export const fetchExperiences = async () => {
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
		const experiences: Experience[] = data.experiences;

		return experiences;
	} catch (error) {
		console.error("An error occurred while fetching the experiences:", error);
		return [];
	}
};
