import Client from './Client';

export const getAllCards = async (request) => await Client.get(`/cardinfo.php`,request).then(res => res.data).catch(err => { console.error(err); return null;});