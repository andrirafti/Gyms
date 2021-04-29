import api from './api-config'
// Can put as many params as i want.. NOT limited to one.. 


export const getAllClients = async (gym_id,trainer_id) => {
  const resp = await api.get(`/gyms/${gym_id}/trainers/${trainer_id}/clients`);
  return resp.data;
}

export const getOneClient = async (gym_id,trainer_id,id) => {
  const resp = await api.get(`/gyms/${gym_id}/trainers/${trainer_id}/clients/${id}`);
  return resp.data;
}
export const postClient = async (gym_id,trainer_id,clientData) => {
  const resp = await api.post(`/gyms/${gym_id}/trainers/${trainer_id}/clients/`, { client: clientData });
  return resp.data;
}

export const putClient = async (gym_id,trainer_id,id, clientData) => {
  const resp = await api.put(`/gyms/${gym_id}/trainers/${trainer_id}/clients/${id}`, { client: clientData });
  return resp.data;
}

export const deleteClient = async (gym_id,trainer_id,id) => {
  const resp = await api.delete(`/gyms/${gym_id}/trainers/${trainer_id}/clients/${id}`);
  return resp.data;
}