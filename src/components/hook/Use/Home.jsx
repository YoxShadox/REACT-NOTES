import {BioContext} from "./index"
import { use } from "react";

export const Home = () =>{
    const  {myName, myAge } =use(BioContext);
    return <h1>Hello.{myName}{myAge}</h1>
};