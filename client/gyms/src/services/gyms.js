import api from './api-config'
// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllGyms = async () => {
  const resp = await api.get('/gyms');
  return resp.data;
}

export const getOneGym = async (id) => {
  const resp = await api.get(`/gyms/${id}`);
  return resp.data;
}
//IF WE WANT to make a new gym,update one,delete one we can do it in here or not..//
//in my case all i want to do is show it, and show a specefic id of a gym and trainer..//
//only time i will do FULL Crud is for the clients./// 
export const postGym = async (gymData) => {
  const resp = await api.post('/gyms', { gym: gymData });
  return resp.data;
}

export const putGym = async (id, gymData) => {
  const resp = await api.put(`/gyms/${id}`, { gym: gymData });
  return resp.data;
}

export const deleteGym = async (id) => {
  const resp = await api.delete(`/gyms/${id}`);
  return resp.data;
}