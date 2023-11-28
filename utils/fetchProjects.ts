import { Project } from "@/typings";

export const fetchProjects = async () => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
		);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();
		const projects: Project[] = data.projects;

		// console.log("fetching", projects);

		return projects;
	} catch (error) {
		console.error("An error occurred while fetching the projects:", error);
		return [];
	}
};
