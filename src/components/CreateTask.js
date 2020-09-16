import React, { useState, useEffect } from 'react'
import {
  Button,
  Card,
  Form,
  Spinner,
} from 'react-bootstrap'

const CreateTask = (props) => {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [numero, setNumero] = useState(0)
  const [hecha, setHecha] = useState(false)

  useEffect(() => {
    if (props.success) {
      resetForm()
    }
    
  }, [props.success])

  function resetForm() {
    setNombre("")
    setDescripcion("")
    setNumero(0)
    setHecha(false)
    props.setSuccess(false)
  }

  return (
    <Card className="mt-3">
      <Card.Body>
        <Form onSubmit={e => {
          e.preventDefault()
          const datos = {
            name: nombre,
            description: descripcion,
            number: numero,
            done: hecha,
          }
          props.submit(datos)
        }}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre de la tarea" required
              name="nombre" value={nombre} onChange={e => setNombre(e.target.value)}
            />
            <Form.Text className="text-muted">
              Ingrese el nombre de la tarea.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formDescripition">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows="3" required
              name="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)}
            />
            <Form.Text className="text-muted">
              Ingrese la descripción de la tarea.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formNumber">
            <Form.Label>Número de la tarea</Form.Label>
            <Form.Control type="number" min="0" placeholder="Número de la tarea" required
              name="numero" value={numero} onChange={e => setNumero(e.target.value)}
            />
            <Form.Text className="text-muted">
              Ingrese el número de la tarea.
            </Form.Text>
          </Form.Group>
          
          <Form.Group controlId="formDone">
            {/* <Form.Check type="checkbox" label="Hecha" /> */}
            <Form.Check
              custom
              type="checkbox"
              label="Hecha"
              name="hecha"
              value={hecha}
              onChange={e => setHecha(e.target.checked)}
              checked={hecha}
            />
          </Form.Group>
          {props.creatingTask ?
            (<div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>) : 
            (<Button variant="primary" type="submit" block>
              Crear
            </Button>)
          }
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CreateTask
