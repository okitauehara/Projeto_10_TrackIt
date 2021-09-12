import axios from "axios";

const URL_BASE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'

function postSignUp(body) {
    const promise = axios.post(`${URL_BASE}/auth/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${URL_BASE}/auth/login`, body);
    return promise;
}

function getUserHabits(config) {
    const promise = axios.get(`${URL_BASE}/habits`, config);
    return promise;
}

function postHabit(body, config) {
    const promise = axios.post(`${URL_BASE}/habits`, body, config);
    return promise;

    
}

export {
    postSignUp,
    postLogin,
    getUserHabits,
    postHabit,
}