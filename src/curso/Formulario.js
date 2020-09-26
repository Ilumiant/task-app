import React,{Fragment, useState} from 'react';

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre:'',
    apellido:''
  })

  const botonsito = (event)=>{
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const enviarDatos = (event)=>{
    event.preventDefault();
    console.log(datos.nombre+''+datos.apellido)
  }

  return ( 
   <Fragment>
     <form onSubmit={enviarDatos}>
       <input type="text" placeholder="Escribe tu nombre"
       name="nombre"
       onChange={botonsito}
       />
       
       <input type="text" placeholder="Tu segundo apellido"
       name="apellido"
       onChange={botonsito}
       />

       <button type="submit">enviar</button>

     </form>
  <h1>{datos.nombre}--{datos.apellido}</h1>
   </Fragment>
   );

}
 
export default Formulario;