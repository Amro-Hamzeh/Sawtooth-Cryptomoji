import axios from 'axios'
const { decode } = require('./encoding');
const { encodeAll } = require('./transactions');
const { createPrivateKey } = require('./signing');

export const getCollections= () => {
	return axios.get('/api/state?address=5f4d7600').then(response =>{
		return response.data.data.map(entity => {
			const decoded=decode(entity.data);
			decoded.address = entity.address;
			return decoded;
		});
	});
}
export const createCollection= () => {
		 var data = {
     'action': 'CREATE_COLLECTION',

 }
 //var headers= {
 	//'Content-Type': 'application/octet-stream' ,
// }

	return axios({ method: 'POST',
       url: '/api/batches',data: encodeAll(createPrivateKey(),data),
       headers: { 'Content-Type': 'application/octet-stream' }
   }).then(response =>{
   	console.log(response);
   });

	module.exports = {
  getCollections,
  createCollection
};


	/*const getCollections= (publicKey) => {
	return axios.get('/api/state/', {
    params: {
      address: publicKey
    }).then(response =>{
		return response.data.data.map(entity => {
			const decoded=decode(entity.data);
			decoded.address = entity.address;
			return decoded;
		});
	});*/
}