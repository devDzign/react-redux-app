import axios from "axios";
import {API_USERS} from "../config"

function register(user) {
    return axios.post(API_USERS, user);
}

export default {
    register
};