import axios from "axios";

export const coreAxios = axios.create({
	baseURL: process.env.REACT_APP_SERVICE_URL,
});

coreAxios.interceptors.request.use(function (req) {
	let token = localStorage.getItem("access");
	//console.log(token);
	if (token) {
		req.headers.authorization = "Bearer " + token;
	}

	return req;
});
