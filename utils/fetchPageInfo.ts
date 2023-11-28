import { PageInfo } from "@/typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
	let res;
	try {
		res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
	} catch (error) {
		console.error(
			"An error occurred while fetching the page info from BASE_URL:",
			error
		);
	}

	if (!res || !res.ok) {
		try {
			res = await fetch(
				`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getPageInfo`
			);
		} catch (error) {
			console.error(
				"An error occurred while fetching the page info from DEPLOY_URL:",
				error
			);
			throw error;
		}
	}

	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}

	const data = await res.json();
	const pageInfo: PageInfo = data.pageInfo;

	console.log("fetching", pageInfo);

	return pageInfo;
};
