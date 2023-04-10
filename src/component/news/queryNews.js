



export function queryNews() {
	return new Promise((resolve) => {
		let cachedNews = sessionStorage.getItem("news");

		if (cachedNews) {
			resolve(JSON.parse(cachedNews));
			return;
		}

		fetch('/news')
			.then(response => response.json())
			.then(response => {
				sessionStorage.setItem("news", response);
				resolve(JSON.parse(response));
			})
	})
}
