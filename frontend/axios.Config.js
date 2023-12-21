import axios from 'axios';


//5000 is backend server port
axios.defaults.baseURL =
    process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/';