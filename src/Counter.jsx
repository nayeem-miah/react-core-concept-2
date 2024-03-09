import { useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0);

    const handlerAdd =()=>{
      const newCount=  count+1;
      setCount(newCount);
    }
    const reduceAdd=()=>{
        const newCount = count -1 ;
        setCount(newCount)
    }
    
    return(
        <div style={{border: '2px solid green'}}>
            <h3>Counter : {count} </h3>
            <button onClick={handlerAdd}>Add</button>
            <button onClick={reduceAdd}>reduce</button>
        </div>
    )
}