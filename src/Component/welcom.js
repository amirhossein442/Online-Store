import { useEffect, useState } from "react"
import React from "react"
export const Welcom = ()=>{
    const[showWelcom, setShowWelcom]= useState(true)
    useEffect(() => {
         const showWelcome = localStorage.getItem('showWelcom');
         setShowWelcom(JSON.parse(showWelcome)?? true);
    },[])

    return(
        <React.Fragment>
            {showWelcom && (
                <div style={{display:'flex', alignItems:'center'}}>
                    <h1>Welcome to our shop</h1>
                    <button onClick={()=> { setShowWelcom(false); localStorage.setItem('showWelcom','false'); }}>X</button>
        </div>)}
        </React.Fragment>
    )
}