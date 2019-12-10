import axios from 'axios';
import Cookies from 'universal-cookie'

const getBaseUrl = url => `http://localhost:8080/api/${url}`;

const cookies = Cookies();

const post =(url,data) =>
    axios.post(getBaseUrl(url),data,{
        headers: {
            'Content-type':'application/json',
            'Accept': 'application/json',
            'Authorization': `bearer ${cookies.get('token')}`
        }
    });