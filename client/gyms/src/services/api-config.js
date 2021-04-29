import axios from 'axios';
//originally keep baseURL=localhost:3000
//make sure to grab the heroku.com link not heroku.api 
const baseURL=process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://gym-trainer-api.herokuapp.com/' : 'http://localhost:3000'
const api = axios.create({
  baseURL: baseURL
})

export default api;