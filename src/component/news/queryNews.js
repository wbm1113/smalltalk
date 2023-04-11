



export function queryNews() {
	return new Promise((resolve, reject) => {
		let cachedNews = sessionStorage.getItem("news");

		if (cachedNews) {
			resolve(JSON.parse(cachedNews));
			return;
		}

		fetch('https://actn5ghkz3.execute-api.us-east-2.amazonaws.com/prod/news')
			.then(response => response.json())
			.then(response => {
				sessionStorage.setItem("news", response);
				resolve(JSON.parse(response));
			})
			.catch(error => {
				reject(error);
			})
	})
}
