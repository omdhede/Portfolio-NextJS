import { Project } from "@/typings";

export const fetchProjects = async () => {
	let res;
	try {
		res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
	} catch (error) {
		console.error(
			"An error occurred while fetching the projects from BASE_URL:",
			error
		);
	}

	if (!res || !res.ok) {
		try {
			res = await fetch(
				`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getProjects`
			);
		} catch (error) {
			console.error(
				"An error occurred while fetching the projects from DEPLOY_URL:",
				error
			);
			return [];
		}
	}

	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}

	const data = await res.json();
	const projects: Project[] = data.projects;

	return projects;
};
