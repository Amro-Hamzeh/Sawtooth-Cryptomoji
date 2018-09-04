import axios from 'axios'
const { decode } = require('./encoding');

const getCollections= () => {
	return axios.get('/api/state?address=5f4d7600').then(response =>{
		return response.data.data.map(entity => {
			const decoded=decode(entity.data);
			decoded.address = entity.address;
			return decoded;
		});
	});
}