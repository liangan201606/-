import axios from 'axios'
let service =  axios.create({
  baseURL:'http://localhost:3000',
  timeout:3000
})

// service.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials=true;
export default service