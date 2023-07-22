import axios from 'axios'
let service =  axios.create({
  baseURL:'http://localhost:3000',
  timeout:3000
})
service.interceptors.response.use((response) => {
  console.log();
  return response;
}, function (error) {
  if (401 === error.response.status) {
      window.location = '/login';
  } else {
      return Promise.reject(error);
  }
});

// service.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default service