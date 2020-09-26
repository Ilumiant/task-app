import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Spinner } from 'react-bootstrap'

const Formulario = (props) => {
  //useStates para el formulario
  const [nombre, setNombre] = useState([])
  const [descripcion, setDescripcion] = useState([])
  const [numero, setNumero] = useState(0)
  const [hecho, setHecho] = useState(false)

  useEffect(() => {

    if(props.success === true){
      setNombre("")
      setDescripcion("")
      setNumero("")
      setHecho(false)
      props.setSuccess(false)
    }

  }, [props.success])

  return (
<>   
<h1 className="text-center" >Formulario</h1>
<Card>
  <Card.Body>
    <Form
    onSubmit={
      (e)=>{
        e.preventDefault()
        const datos ={
          name:nombre,
          description:descripcion,
          number:numero,
          done:hecho
        }
        props.submit(datos)
      }
    }>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre de la tarea"
        name="nombre"  value={nombre}
        onChange={
          (e)=>{setNombre(e.target.value)}
        }/>
        <Form.Text className="text-muted">
          debes colocar el nombre de la tarea a realizar
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formDescripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Descripcion"
        name="drescipcion"  value={descripcion}
        onChange={
          (e)=>{setDescripcion(e.target.value)}
        }/>
      </Form.Group>

      <Form.Group controlId="formNumero">
        <Form.Label>Numero</Form.Label>
        <Form.Control type="number" placeholder="Numero de tarea" min={0} 
        name="numero"  value={numero}
        onChange={
          (e)=>{setNumero(e.target.value)}
        }
        />
        <Form.Text className="text-muted">
          debes colocar el numero de la tarea
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Hecho"
        name="hecho" value={hecho} 
        onChange={(e)=>{setHecho(e.target.checked)}}
        checked={hecho} 
        />
      </Form.Group>
      {props.botonLoanding ? 
      ( <Spinner animation="border" />) :
      (<Button variant="primary" type="submit">
      Submit
    </Button>)}

    </Form>
 </Card.Body>
</Card>
</>
  )
}

export default Formulario
