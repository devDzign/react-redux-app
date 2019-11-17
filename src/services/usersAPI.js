import axios from "axios";
import {API_USERS} from "../config"

function register(user) {
    return axios.post(API_USERS, user);
}

function me() {
    return axios.get(`${API_USERS}/me`);
}

export default {
    register,
    me
};