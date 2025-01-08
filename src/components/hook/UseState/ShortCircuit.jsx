import { useState } from "react"


export const ShortCircuitExaple = () => {
    const[isLoggedIn, setIsLoggedIn]=useState(true)
    const[user, setUser]=useState("")
    return (
        <section>
            <h1>Welcome to the ShortCircuit Evaluation!</h1>

            {isLoggedIn && <p>You are looged in!</p>}
            {user ? `Hello ${user}` : "Please log in!"}


            <div>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={() => setUser("yash")}>Set User</button>
                <button onClick={() => setUser("")}>Clear User</button>
            </div>
        </section>
    )
}