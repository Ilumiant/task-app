import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
import CreateTask from './CreateTask'

const List = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [buttonOnIff, setButtonOnIff] = useState(false)
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    getTask()
  }, [])

  function getTask(){
    Axios.get("http://localhost/task-api/public/api/v1/tasks")
    .then(
      (e)=>{
        const tasksAux = e.data.map( task=>{
          task.isCreated =true
          return task
        })
        setTasks(tasksAux)
        setLoading(false)
      }
    )
  }

  function submit(datos) {
    setButtonOnIff(true)
    const tasksAux = [...tasks]
    tasksAux.push({id: tasks[tasks.length-1].id +1, 
      isCreated: false,
      ...datos})
    setTasks(tasksAux)
       Axios.post("http://localhost/task-api/public/api/v1/tasks",datos)
      .then(
        (e)=>{   
          getTask()
          setButtonOnIff(false)
          setSuccess(true)
        }
      )
  }
  return (
    <Container>
      <Row>
        <Col xs={6} md={6} className="text-center">
         <h1>Tareas</h1>
         {loading ?
         (<Spinner animation="border" />):
         (        <ListGroup className="text-left">
         {tasks.map(
           (task)=>{
              return(
                <ListGroup.Item key={task.id}
                style={{
                  background: task.isCreated ? "white" : "#ddd",
                   }}> 
                  {task.number}.-{task.name} {task.description} 
                </ListGroup.Item>
            )}
         )}
    </ListGroup>)}

        </Col>
        <Col xs={6} md={6}>
          <CreateTask submit={submit} 
          buttonOnIff={buttonOnIff}
          success={success} 
          setSuccess={setSuccess}/>
        </Col>
      </Row>
    </Container>
  )
}

export default List
