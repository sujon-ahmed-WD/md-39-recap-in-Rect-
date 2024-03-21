import { useState } from "react";

export default function Team(){
    const[team ,setTeam]=useState(11)
    const Add=()=>{
        const newCount=team+1;

        setTeam(newCount)
    }
    const del=()=>{
        // const newdel=team-1;
        // setTeam(newdel)
        setTeam(team-1)
    }

    const teamStyle={
        border:'2px solid red',
        margin:'5px',
        padding:'10px',
        borderRadius:'15px'

    }
    return(
        <div style={teamStyle}>
            <h1>Player:{team}</h1>
            <button onClick={Add}>ADD</button>
            <button onClick={del}>Remobe</button>
        </div>
      

    )
}