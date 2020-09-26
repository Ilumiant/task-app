import React, { useState } from 'react';

const List = () => {
const [numeroa, setNumeroa] = useState([1,2,3,4,5])
const [numerob, setNumerob] = useState(6)
const listarray = numeroa.map((e,id)=> <p >{id}.-{e}</p>)
const agregarElemento = ()=>{

 setNumerob(numerob+1)
 setNumeroa([...numeroa,numerob])
}
 
return (
    <div>
  {listarray}
  <button onClick={agregarElemento}>agregar</button>  
    </div>
    );
}
 
export default List;