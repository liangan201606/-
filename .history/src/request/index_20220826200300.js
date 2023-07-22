import axios from 'axios'
axios.defaults.withCredentials=true;
let service =  axios.create({
  baseURL:'http://localhost:3000',
  timeout:3000
})

// service.interceptors.response.use((response) => {
//   console.log('收到响应数据');
//   console.log(response);
//   return response;
// }, function (error) {
//   if (302 === error.response.data.code) {
//       window.location = '/login';
//   } else {
//       return Promise.reject(error);
//   }
// });

// service.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default service