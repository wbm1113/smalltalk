
let iterations = 0;

export function queryUserPosition() {
  return new Promise((resolve) => {
    let cachedPosition = sessionStorage.getItem("position");

    if (cachedPosition) {
      resolve(JSON.parse(cachedPosition));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        // let resolution = {
        //   city: "city",
        //   state: "state",
        //   zip: "zip",
        //   county: "county"
        // }
        // sessionStorage.setItem("position", JSON.stringify(resolution))
        // resolve(resolution)

        fetch(
          'https://actn5ghkz3.execute-api.us-east-2.amazonaws.com/prod/reversegeolocation',
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              latitude: latitude,
              longitude: longitude
            })
          }
        )
        .then(response => response.json())
        .then(response => {
          response = JSON.parse(response.body.response);
          let data = response.features[0].properties;

          let resolution = {
            city: data.city,
            county: data.county,
            state: data.state,
            zip: data.postcode
          }

          sessionStorage.setItem("position", JSON.stringify(resolution))
          resolve(resolution)
        })
      }
    )
  })
}