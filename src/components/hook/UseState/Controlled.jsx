import { useState } from "react";

export const Controlled= () =>{
     const [name, setName] = useState("");
     const handleChange = (event) =>
     {
        setName(event.target.value);
     };
   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name)
};

    return(
        <>
          <section>
           <h1>Controlled</h1>
          <div>
            <label htmlFor="
            ">
              Name:
               <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          </section>
        </>
    );
};
