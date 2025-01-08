import { createContext, useContext } from "react";

export const BioContext = createContext();

 export const BioProvider = ({children}) =>{
    const myName = "yash";
    const myAge = 19;

    return <BioContext.Provider value={{myName, myAge}}>{children}
    </BioContext.Provider>
}

export const useBioContext = () => {
    const context = useContext(BioContext);  //Custom hook
    if (context === undefined){
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context

}
