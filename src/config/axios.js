import axios from 'axios';

const clientAxios = axios.create({
  serverURL: process.env.REACT_APP_BACKEND_URL
});

export default clientAxios;
