import { useState } from "react"

export default function Team (){


    const [team , setTeam]= useState(11);

    const handlerAdd=() =>{
        const newTeam = team-1;
    setTeam(newTeam)
    }
    const handlerRemove=() =>{
        const newTeam = team+1;
        setTeam(newTeam)
    }
    const teamStyle = {
        border: '2px solid purple',
        margin : '15px',
        padding : '20px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Player :{team} </h3>
            <button onClick={handlerRemove}>Add</button>
            <button onClick={handlerAdd}>remove</button>
        </div>
    )
}