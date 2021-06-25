//import axios from 'axios';
import axios from 'axios';

const services = axios.create ({
    baseURL: 'https://example-ecommerce.herokuapp.com'
});

export default services;