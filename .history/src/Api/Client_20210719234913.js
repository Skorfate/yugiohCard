import axios from 'axios'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const Client = axios.create({

	baseURL: `${REACT_APP_API_URL}`,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	}

})

Client.interceptors.request.use(request => request);

Client.interceptors.response.use(response => response.data);

export default Client;