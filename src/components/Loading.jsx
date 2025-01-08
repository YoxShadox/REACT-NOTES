import { useEffect, useState } from "react"

export const Pokemon = () =>{
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading]= useState(true);

    const fetchPokimon = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((res) => res.json())
        .then((data) =>{
          setApiData(data);
          setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        setLoading(false);
    });

    }

    useEffect(()=>{
        fetchPokimon();
    },[]);

    if(loading){
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
     
    return(
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

