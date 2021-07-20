import Client from './Client';

export const getCard = async (request) => await Client.get(``,request).then(res => res.data).catch(err => { console.error(err); return null;});