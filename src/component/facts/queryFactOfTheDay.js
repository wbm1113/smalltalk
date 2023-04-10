

export function queryFactOfTheDay() {
  return new Promise((resolve) => {
    let cachedFact = sessionStorage.getItem("factOfTheDay");

    if (cachedFact) {
      resolve(cachedFact);
      return;
    }

    fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
      .then(data => data.json())
      .then(data => {
        sessionStorage.setItem("factOfTheDay", data.text)
        resolve(data.text)
      })
  })
}