import { useEffect, useState } from "react"

export const Pokemon = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
const fetchPokimon = async () => {
    try {
         const res = await fetch(API);
        const data = await res.json();
        setApiData(data);
        setLoading(false);
    } catch (error) {
        console.log(error);
       setError(error);
       setLoading(false);      
}
}

useEffect(() => {
    fetchPokimon();
}, []);

if (loading)
    return (
        <div>
            <h1>Loading....</h1>
        </div>
    );

if (error)
    return (
        <div>
            <h2>Error: {error.message}</h2>
        </div>
    )

return (
    <section>
        <header>
            <h1>Lest Catch Pokemon</h1>
        </header>
        <ul>
            <li>
                <figure></figure>
                <img src={apiData.sprites.other.dream_world.front_default}
                    alt={apiData.name} />
                <h1>{apiData.name}</h1>
            </li>
        </ul>
    </section>
);
};


