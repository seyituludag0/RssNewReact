import axios from "axios";

const APIURL = "https://localhost:7157/api/"

export default class NewsService{
    getNews(){
        return axios.get(APIURL + "News/MynetgetAllNews")
    }

    newsTitleSearch(newsTitle){
        return axios.get(APIURL + `News/MynetNewsTitleSearch?key=${newsTitle}`);
    }
}