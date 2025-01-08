import { useId } from "react"

export const  UseId = () =>{
    
    const id=useId();

    return(
        <form action="">
            <div>
                <label htmlFor={id +"usernameId"}>Username:</label>
                <input type="text" id={id +"usernameId"} name="name" />
            </div>
            <div>
                <label htmlFor={id +"emailId"}>Password:</label>
                <input type="email" id={id +"emailId"} name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

