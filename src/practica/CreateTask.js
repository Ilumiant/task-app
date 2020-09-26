import React,{ useState,} from 'react'
import { Form, Button, Card, Spinner } from 'react-bootstrap'
const CreateTask = (props) => {
  const [nombre, setNombre] = useState([])
  const [descripcion, setDescripcion] = useState([])
  const [numero, setNumero] = useState([])
  const [hecho, setHecho] = useState(false)

  

  return (
    <>
      <h1 className="text-center">Crear Tarea</h1>
        <Card >
          <Card.Body>
            <Form
            onSubmit={
              (e)=>{e.preventDefault()
                const datos ={
                  name:nombre,
                  description:descripcion,
                  number:numero,
                  done:hecho,
                }
              props.submit(datos)
              }
            }>

              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="introduce tu nombre"
                name="nombre"  value={nombre}
                onChange={(e)=>{setNombre(e.target.value)}}/>
                <Form.Text className="text-muted">
                  unicamente debes colocar el nombre de tu tarea
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="describenos la tarea a realizar" 
                name="descripcion" value={descripcion}
                onChange={(e)=>{setDescripcion(e.target.value)}}/>
              </Form.Group>

              <Form.Group controlId="formNumero">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="number" placeholder="introduce tu numero"  min="1" max="100"
                name="numero" value={numero}
                onChange={(e)=>{setNumero(e.target.value)}}/>
                <Form.Text className="text-muted">
                  Solo se permiten caracteristicas del 1 al 100
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Realizado" custom 
                name="hecho" value={hecho} checked={hecho}
                onChange={(e)=>{setHecho(e.target.checked)}}/>
              </Form.Group>
                {props.crearTarea ?
                (<Spinner animation="border" />) :
                (<Button variant="primary" type="submit">
                Submit
                </Button>)}
              
            </Form>
          </Card.Body>
        </Card>
     </>  
  )
}

export default CreateTask
