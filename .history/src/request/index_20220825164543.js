import axios from 'axios'
let service =  axios.create({
  baseURL:'6',
  timeout:3000
})
export default service