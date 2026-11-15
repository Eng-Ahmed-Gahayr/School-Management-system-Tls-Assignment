import { useState } from "react";
function Counter(){
    const[counter,setCounter]=useState(0);
    

    function Add(){
    setCounter(counter+1);
    };
function Sub(){
    setCounter(counter-1);
};
function Reset(){
    setCounter(0);
};
    return(
        <>
        <p>{counter}</p>
        <button onClick={Add}> Add</button>
        <button  onClick={Sub}>Sub</button>
        <button onClick={Reset}>Reset</button>

        </>
    )
}
export default Counter;