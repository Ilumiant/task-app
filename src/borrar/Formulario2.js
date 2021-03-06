import React from 'react'
import { Button, Card, Form, } from 'react-bootstrap'

const Formulario2 = (props) => {
  //useStates para el formulario

  return (
<>   
<h1 className="text-center" >Editas tu User</h1>
<Card>
  <Card.Body>
    <Form>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="nombre de editar"
        name="nombre"  value={props.takeName}
        onChange={
          (e)=>{props.setTakeName(e.target.value)}
        }/>
        <Form.Text className="text-muted">
          debes colocar el nombre de la tarea a realizar
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formDescripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Descripcion"
        name="drescripcion"  value={props.takeDescription}
        onChange={
          (e)=>{props.setTakeDescription(e.target.value)}
        }/>
      </Form.Group>

      <Form.Group controlId="formNumero">
        <Form.Label>Numero</Form.Label>
        <Form.Control type="number" placeholder="Numero de tarea" min={0} 
        name="numero"  value={props.takeNumber}
        onChange={
          (e)=>{props.setTakeNumber(e.target.value)}
        }
        />
        <Form.Text className="text-muted">
          debes colocar el numero de la tarea
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Hecho"
        name="hecho" value={props.takeHe} 
        onChange={(e)=>{props.setTakeDone(e.target.checked)}}
        checked={props.takeDone} 
        />
      </Form.Group>
      <Button variant="success" 
      onClick={()=>{
        console.log(props.takeId)
        const datosActualizar = {
          name: props.takeName,
          description: props.takeDescription,
          number: props.takeNumber,
          done: props.takeDone,
        }
        props.Editar(props.takeId, datosActualizar)
      }}>
      Actualizar
      </Button>
    </Form>
 </Card.Body>
</Card>
</>
  )
}

export default Formulario2
