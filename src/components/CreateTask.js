import React, { useEffect, useState } from 'react'
import { Button, Card, Form,Spinner } from 'react-bootstrap'

const CreateTask = (props) => {
  const [nombre, setNombre] = useState([])
  const [descripcion, setDescripcion] = useState([])
  const [numero, setNumero] = useState([])
  const [hecho, setHecho] = useState(false)

  useEffect(() => {

    if(props.success === true){
      setNombre([])
      setDescripcion([])
      setNumero([])
      setHecho(false)
      props.setSuccess(false)      
    }
    
  }, [props.success])

  return (
    <>
   <h1 className="text-center" >Fomulario</h1>
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
              props.submit(datos)}
            }
            >
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="introduce tu nombre"
                name="nombre"  value={nombre} required
                onChange={(e)=>{setNombre(e.target.value)}}/>
                <Form.Text className="text-muted">
                  unicamente debes colocar el nombre de tu tarea
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="describenos la tarea a realizar" 
                name="descripcion" value={descripcion} required
               onChange={(e)=>{setDescripcion(e.target.value)}}/>
              </Form.Group>

              <Form.Group controlId="formNumero">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="number" placeholder="introduce tu numero"  min="1" max="100"
                name="numero" value={numero} required
                onChange={(e)=>{setNumero(e.target.value)}}/>
                <Form.Text className="text-muted">
                  Solo se permiten caracteristicas del 1 al 100
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Realizado" custom 
                name="hecho" value={hecho} checked={hecho} required
               onChange={(e)=>{setHecho(e.target.checked)}}/>
              </Form.Group>
              {props.buttonOnIff ? 
              (  <div class="text-center">
                <Spinner animation="border"/>
                </div>):
              (<Button variant="primary" type="submit" block>
              Submit
            </Button>)
              }
            

            </Form>
          </Card.Body>
        </Card>
        </>
  )
}

export default CreateTask
