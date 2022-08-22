import axios from 'axios';
import { apiUrl, API_KEY } from '../api';

function getMovies() {
	return axios.get(`${'https://movies-app1.p.rapidapi.com/api/genres'}/popular?api_key=${'44a24d688emsh175990d0823a28ap1d3296jsn8ac2b45940e9'}&language=en-US`).then((response) => response.data.results);
}

export default {
	getMovies,
};
// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://movies-app1.p.rapidapi.com/api/genres',
//   headers: {
//     'X-RapidAPI-Key': '44a24d688emsh175990d0823a28ap1d3296jsn8ac2b45940e9',
//     'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
//   }
// };