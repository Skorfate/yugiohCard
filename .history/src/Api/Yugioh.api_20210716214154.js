import Client from './Client';

export const card = async (request) => await Client.get(``,request).then(res => res.data).catch(err => { console.error(err); return null;});