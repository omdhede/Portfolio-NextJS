import { Social } from "@/typings";

export const fetchSocials = async () => {
	let res;
	try {
		res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
	} catch (error) {
		console.error(
			"An error occurred while fetching the socials from BASE_URL:",
			error
		);
	}

	if (!res || !res.ok) {
		try {
			res = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getSocials`);
		} catch (error) {
			console.error(
				"An error occurred while fetching the socials from DEPLOY_URL:",
				error
			);
			return [];
		}
	}

	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}

	const data = await res.json();
	const socials: Social[] = data.socials;

	return socials;
};
