import { useState } from "react"
  
  export const DerivedState = () =>{

    const [user, setUser] =useState([
        {name:"Alice", age: 25},
        {name:"Bob", age: 30},
        {name:"Charlie", age: 35},
        {name:"Angles", age: 45},
      ])  
    const userCount =user.length  //DerivedState

    const averageAge =
        user.reduce((accum, curElem) => accum + curElem.age, 0)/ userCount;

    return(
      <div>
        <h1>User List</h1>
        <ul>
          {user.map((curElem, index) =>{
              return(
                <>
                <li>
                    {index}:  
                  {curElem.name} - {curElem.age} year old
                </li>
                </>
              )
            })}
        </ul>
        <p>Total:{userCount}</p>
        <p>Avg:{averageAge}</p>
      </div>
    )
  }