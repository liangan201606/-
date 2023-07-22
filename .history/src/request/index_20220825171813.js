import axios from 'axios'
let service =  axios.create({
  baseURL:'http://localhost:',
  timeout:3000
})
export default service