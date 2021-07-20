import Client from './Client';

export const getAllCards = async (id) => await Client.get(`/cardinfo.php`).then(res => res.data).catch(err => { console.error(err); return null;});