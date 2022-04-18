import axios from "axios";
const APIURL = "https://localhost:7157/api/"


export default class UserService{
    register(user){
        return axios.post(APIURL + "Auth/register", user)
    }

    login(credentials){
        return axios.post(APIURL + "Auth/login", credentials)
    }
}