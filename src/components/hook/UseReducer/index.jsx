import { useReducer } from "react"

export const ReducerComp = () => {
    const initialState = {
        count: 0,
    }
    const reducer = (state, action) => {
    //     if (action.type === "INCREMENT") {
    //         return state + 1;
    //     }

    //     if (action.type === "DECREMENT") {
    //         return state - 1;

    //     }
    //     if(action.type === "RESET"){
    //         return  state = 0;
    //     }
    // }

    switch(action.type)
    {
        case"INCREMENT":
           return {count:state.count +1
           };
        
        case"DECREMENT":
        return {count:state.count -1
        };
     
        case"RESET":
        return {count:0
        };
        default:
            return state;
    }
    } 

    const[state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-56">
                <h1>{state.count}</h1>
                <button className="bg-blue-500 rounded-full" onClick={() => dispatch({
                    type:
                        "INCREMENT"
                })}>Increment</button><br/>
                <button className="bg-blue-500 rounded-full" onClick={() => dispatch({
                    type:
                        "DECREMENT"
                })}>Decrement</button><br/>
                  <button className="bg-red-500 rounded-full" onClick={() => dispatch({
                    type:
                        "RESET"
                })}>Reset</button>
            </div>
        </>
    )
};