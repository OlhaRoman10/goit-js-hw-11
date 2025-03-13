import axios from "axios";
const API_KEY = "49321124-d9248d4be3ea0dc21aad93268";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query) {
    return axios
        .get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            },
        })
        .then(function (response) {
            return response.data.hits;
        });
}


// fetchUsersBtn.addEventListener("click", () => {
// fetch("https://pixabay.com/api/?key=49321124-d9248d4be3ea0dc21aad93268&q=")
// .then((response) => {
//  if (!response.ok) {
// throw new Error(response.status);
//  }
// return response.json();
//  })
//  .then((users) => {
// 			// Дані від бекенда
// 			console.log(users);
// 		})
// .catch((error) => console.log(error));
// });

