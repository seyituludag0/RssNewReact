import { React, useState, useEffect } from 'react'
import NewsService from "../../services/NewsService"

function Data(props) {
    const [news, setNews] = useState([])
    useEffect(()=>{
        let newsService = new NewsService();
        newsService.getNews().then((result)=>setNews(result.data))
    }, [])

    const filteredData = news.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item, key) => (
                <li style={{listStyle:"none"}} key={key}>{key + 1}-) {item}</li>
            ))}
        </ul>
    )
}


export default Data