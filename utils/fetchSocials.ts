import { Social } from "@/typings";

export const fetchSocials = async () => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
		);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();
		const socials: Social[] = data.socials;

		// console.log("fetching", socials);

		return socials;
	} catch (error) {
		console.error("An error occurred while fetching the socials:", error);
		return [];
	}
};
