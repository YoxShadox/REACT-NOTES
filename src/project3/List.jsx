
export const List=(props)=>{
    const {id, img_url, name, rating, description, cast, genre, watch_url}= props.curElem;
    return(
        <li className="card" key={props.key}>
        <div>
          <img className="image"src={img_url}
            alt={name}
            width="40%"
            height="40%" />
        </div>
        <h2>Name:{name}</h2>
        <h3>Rating:<span className={rating>=8.5?"super_hit" :"average"}>{rating}</span>
        </h3>
        <p  className=" font-bold  underline" style={{margin:"0.5rem 0"}}>Summary:{description}</p>
        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url}> 
         {/* <button  className={rating>=8.5?"super_hit" :"average"} >Watch Now </button> */}
         <button  className={rating>=8.5?"super_hit" :"average"} >Watch Now </button>
         </a>
         {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>  talwind css */}
        </li>
    )
}
