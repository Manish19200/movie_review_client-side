import axios from 'axios';

export default axios.create({
    // YOU CAN USE LOCAL SYSTEM BACKEND URL OR THE SERVER WHICH YOU ARE GOING TO USE AS A BACKEND
    baseURL:'http://localhost:8080'
});