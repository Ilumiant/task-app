import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import CreateTask from './CreateTask'
import { Container, Row, Col, ListGroup, Spinner } from 'react-bootstrap'

const List = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [crearTarea, setCrearTarea] = useState(false)

  useEffect(() => {
    getTasks()
  }, [])

  function getTasks(){
    Axios.get("http://localhost/task-api/public/api/v1/tasks")
    .then(
      (e)=>{setTasks(e.data)
      setLoading(false)
      }
      
    )
  }

  function submitTask(datos) {
    setCrearTarea(true)
      const tasksAux = [...tasks]
      tasksAux.push({id: tasks[tasks.length-1].id + 1,
      ...datos})
      setTasks(tasksAux)
    Axios.post("http://localhost/task-api/public/api/v1/tasks", datos)
    .then((e)=>{ getTasks()
    setCrearTarea(false)
    })
  }

  return ( 
    <Container>

      <Row>
        <Col sm={12} md={6} className="text-center">
          <h1>Lista de Tareas</h1>
            {loading ? 
              (<Spinner animation="border" />):
              ( <ListGroup>
                {tasks.map((task)=>{return(<ListGroup.Item key={task.id}>{task.id}.-{task.name}</ListGroup.Item>)})} 
                </ListGroup>)
            }

        </Col>
        <Col sm={12} md={6}>
          <CreateTask submit={submitTask} crearTarea={crearTarea}/>
        </Col>

      </Row>

    </Container>
  )
}

export default List
