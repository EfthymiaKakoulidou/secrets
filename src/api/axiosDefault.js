import axios from 'axios';

axios.defaults.baseURL = 'https://seecrets-d488911dd03c.herokuapp.com/'
axios.defaults.headers.post['Content/Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true