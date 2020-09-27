import React, { useState, useEffect } from 'react'
import { Button, Card, Form, } from 'react-bootstrap'

const Formulario2Otro = (props) => {
  //useStates para el formulario
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [number, setNumber] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (props.task.id !== undefined) {
      setName(props.task.name)
      setDescription(props.task.description)
      setNumber(props.task.number)
      setDone(props.task.done)
    }
  }, [props.task.id])

  return (
<>   
<h1 className="text-center" >Editas tu User</h1>
<Card>
  <Card.Body>
    <Form>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="nombre de editar"
        name="nombre"  value={name}
        onChange={ e => setName(e.target.value) }/>
        <Form.Text className="text-muted">
          debes colocar el nombre de la tarea a realizar
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formDescripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Descripcion"
        name="drescripcion"  value={description}
        onChange={
          (e)=>{setDescription(e.target.value)}
        }/>
      </Form.Group>

      <Form.Group controlId="formNumero">
        <Form.Label>Numero</Form.Label>
        <Form.Control type="number" placeholder="Numero de tarea" min={0} 
        name="numero"  value={number}
        onChange={
          (e)=>{setNumber(e.target.value)}
        }
        />
        <Form.Text className="text-muted">
          debes colocar el numero de la tarea
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Hecho"
        name="hecho" value={done} 
        onChange={(e)=>{setDone(e.target.checked)}}
        checked={done} 
        />
      </Form.Group>
      <Button variant="success" 
      onClick={()=>{
        props.Editar(props.task.id, { name, description, number, done })
      }}>
      Actualizar
      </Button>
    </Form>
 </Card.Body>
</Card>
</>
  )
}

export default Formulario2Otro
