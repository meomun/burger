import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e7380.firebaseio.com/'
});

export default instance;