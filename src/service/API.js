import axios from "axios";

const URL_BASE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'

function postSignUp(body) {
    const promise = axios.post(`${URL_BASE}/auth/signup`, body);
    return promise;
}

export {
    postSignUp,
}