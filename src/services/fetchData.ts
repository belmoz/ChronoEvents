import { periods } from "src/db";

export const fakeFetch = async () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			try {
				res(periods);
			} catch (error) {
				rej(error);
			}
		}, 300);
	});
};

export const fetchData = async () => {
	try {
		const response = await fetch("");
		if (!response.ok) {
			throw new Error("Response is not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
