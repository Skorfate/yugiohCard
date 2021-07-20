import axios from 'axios'


const Client = axios.create({

	baseURL: `https://db.ygoprodeck.com/api`,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	}

})

Client.interceptors.request.use(request => request);

Client.interceptors.response.use(response => response.data);

export default Client;