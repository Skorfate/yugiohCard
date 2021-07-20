import Client from './Client';

export const getCard = async (request) => await Client.get(`/v7/cardinfo.php`,request).then(res => res.data).catch(err => { console.error(err); return null;});