import axios from "axios";
import {API_PRODUCTS} from "../config"

function findAll(itemsPerPage=6,currentPage=1) {
    return axios.get(`${API_PRODUCTS}?pagination=true&count=${itemsPerPage}&page=${currentPage}`);
}

export default {
    findAll
};