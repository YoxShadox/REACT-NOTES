import { createContext } from "react";

// ONLY USE HOOK IS USED INSIDE A CONDITION

export const BioContext = createContext();

 export const BioProvider = ({children}) =>{
    const myName = "yash";
    const myAge = 19;

    return <BioContext.Provider value={{myName, myAge}}>{children}
    </BioContext.Provider>
}



