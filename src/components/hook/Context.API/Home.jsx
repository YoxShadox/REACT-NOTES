import {useBioContext} from "./index"

export const Home = () =>{
    const  {myName, myAge } =useBioContext();
    return <h1>Hello.{myName}{myAge}</h1>
};