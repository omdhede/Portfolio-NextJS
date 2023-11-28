import { PageInfo } from "@/typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
	try {
		let res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
		);

		if (!res.ok) {
			res = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getPageInfo`);

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}
		}

		const data = await res.json();
		const pageInfo: PageInfo = data.pageInfo;

		console.log("fetching", pageInfo);

		return pageInfo;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
