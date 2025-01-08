import seriesData from "../api/seriesData.json"
import { List } from "./List";

export const Card = () => {
  return (<ul className="list">
   {seriesData.map((curElem)=>{
    return <List key={curElem.id} curElem={curElem}/>
    
   })}</ul>
  );
}