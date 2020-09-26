import React from 'react'
import { Button, Form, Card} from 'react-bootstrap'

const FormUser = (props) => {
  return (
<Form>
  <Card>
  <Card.Body>
    <Form.Group controlId="formNombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="Nombre" />
    </Form.Group>

    <Form.Group controlId="formNombreUsuario">
      <Form.Label>Nombre de Usuario</Form.Label>
      <Form.Control type="text" placeholder="Nombre de Usuario" />
    </Form.Group>

    <Button variant="primary" type="submit" block>
      Submit
    </Button>
    </Card.Body>

  </Card>
    
</Form>
  )
}

export default FormUser
