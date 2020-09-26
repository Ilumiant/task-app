import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import FormUser from './FormUser'

const UserTable = () => {

  const usersData = [
    {id:1, name:"jose", username:"fordelius"},
    {id:2, name:"leidys", username:"maravilla"},
    {id:3, name:"angel", username:"morocho"}
  ]
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length +1
    setUsers([...users, user])
  }

  return (

    <Container>
      <Row>
        <Col className="col-6">
            <h1>CRUD App With Hooks</h1>
            <h3>Add user</h3>
            <FormUser addUser={addUser}/>
        </Col>
        <Col className="col-6">
        <h3 className="mt-5">View users</h3>

        <Table striped bordered hover >
  <thead>
    <tr>
      <th>Name</th>
      <th>User</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {  users.length > 0 ?
       users.map(user=>(

          <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>
            <button class="btn btn-primary mx-1">edit</button>
            <button class="btn btn-danger mx-1">delete</button>
    
          </td>
        </tr>
        )) :
        (<tr >
          <td colSpan={3} className="text-center">No User</td>
        </tr>)

    }

  </tbody>
</Table>

        </Col>
      </Row>
    </Container>
  )
}

export default UserTable
