import axios from "axios";

const BASE_URL = "https://youtube-v3-lite.p.rapidapi.com";
const options = {
	headers: {
		"X-RapidAPI-Key": "6da0634f9bmsh8f6c49431c54982p165abfjsnfd18fedc67ba",
		"X-RapidAPI-Host": "youtube-v3-lite.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
};
