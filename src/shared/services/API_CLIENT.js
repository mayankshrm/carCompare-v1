import axios from "axios";

export const API_CLIENT = {
    get(URL){
        const promise = axios.get(URL,Option,{timeout:7000});
        return promise;
    }
}