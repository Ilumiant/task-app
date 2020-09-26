import React, { useState } from 'react';
 const Contadorsuma = () => {
   const [numero, setNumero] = useState(0)
   return (
     <div>
       <h1>{numero}</h1>
       <button onClick={()=>{setNumero(numero+1)}}>sumar+1</button>
     </div>
     );
 }
  
 export default Contadorsuma;