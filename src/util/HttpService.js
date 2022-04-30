
import axios from 'axios';



axios.interceptors.request.use((request) => {
    let token = localStorage.getItem('token');
    request.headers['Authorization'] = 'Bearer ' + token;
    return request;
});

axios.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {

    }
});



export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    head: axios.head,
};
