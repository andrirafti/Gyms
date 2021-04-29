import api from './api-config'
// this works as the first child of a main model//
export const getAllTrainers = async (id) => {
  const resp = await api.get(`/gyms/${id}/trainers`);
  console.log(resp.data)
  return resp.data;
}

export const getOneTrainer = async (id) => {
  const resp = await api.get(`/gyms/${id}/trainers/${id}`);
  return resp.data;
}









/// The below is not needed since we just want to show and get all trainers
export const postTrainer = async (id,trainerData) => {
  const resp = await api.post(`/gyms/${id}/trainers`, { trainer: trainerData });
  return resp.data;
}

export const putTrainer = async (id, trainerData) => {
  const resp = await api.put(`/gyms/${id}/trainers/${id}`, { trainer: trainerData });
  return resp.data;
}

export const deleteTrainer = async (id) => {
  const resp = await api.delete(`/gyms/${id}/trainers/${id}`);
  return resp.data;
}