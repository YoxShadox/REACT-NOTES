import { useEffect, useState } from "react"

export const FetchApi = () =>{
    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        fetch("https://synoize.github.io/tech_news_api/tech_news.json")
        .then((res) => res.json())
        .then((data) =>{
          setApiData(data);
        })
        .catch((error) => console.log(error));
    },[]);

    return(
        <div>
            <ul>
                data:
                {apiData.map((curDAta)=>{
                    return <li key={(curDAta.id)}> {curDAta.title}</li>
                })}
            </ul>
        </div>
    )
}