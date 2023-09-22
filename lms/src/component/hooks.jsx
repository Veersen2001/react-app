

import React, { useState } from 'react';



function Hooks() {
    // Declare a new state variable, which we'll call "count"
    
    const [x, setCount] = useState(0);
   
   

    return (
        <div>
            x = {x}
            <button onClick={()=>setCount(x+1)}>Inc</button>
           
        </div>
    );
}
export default Hooks;
