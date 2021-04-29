import axios from 'axios';
//Since we make axios.create into api we will be doing
//localhost:3000/api/________
// to call stuff 
const baseURL=process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://git.heroku.com/gym-trainer-api.git' : 'http://localhost:3000'
const api = axios.create({
  baseURL: baseURL
})

export default api;