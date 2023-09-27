

import React, { useState } from 'react';



function Hooks() {
    // Declare a new state variable, which we'll call "count"
    
    const [x, setCountX] = useState(0);
    const [y, setCountY] = useState(0);
   
   

    return (
        <div>
            x = {x}
            <button onClick={()=>setCountX(x+1)}>Inc</button>
            y = {y}
            <button onClick={() => setCountY(x + 1)}>Inc</button>


           
        </div>
    );
}
export default Hooks;
