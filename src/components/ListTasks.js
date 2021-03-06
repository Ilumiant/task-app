import React, { useState, useEffect } from 'react'
import { 
  Col,
  Container,
  ListGroup,
  Row,
  Spinner,
} from 'react-bootstrap'
import Axios from 'axios'
import CreateTask from './CreateTask'

const ListTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [creatingTask, setCreatingTask] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    getTasks()
  }, [])

  function getTasks() {
    Axios.get("http://localhost/task/public/api/v1/tasks")
      .then(response => {
        const tasksAux = response.data.map(task => {
          task.isCreated = true
          return task
        })
        setTasks(tasksAux)
        setLoading(false)
      })
  }

  function submitTask (datos) {
    setCreatingTask(true)
    const tasksAux = [...tasks]
    tasksAux.push({
      id: tasks[tasks.length-1].id + 1,
      isCreated: false,
      ...datos
    })
    setTasks(tasksAux)
    Axios.post("http://localhost/task/public/api/v1/tasks", datos)
      .then(response => {
        getTasks()
        setCreatingTask(false)
        setSuccess(true)
      })
  }
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="text-center">
          <h2>TAREAS</h2>
          {loading ? 
            (<Spinner className="mt-5" animation="border" />) : 
            (<ListGroup className="text-left">
              {tasks.map(task => {
                return (
                  <ListGroup.Item 
                    key={task.id}
                    style={{ 
                      backgroundColor: task.isCreated ? "white" : "#ddd",
                    }}
                  >
                    {task.number}. {task.name}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>)
          }
        </Col>
        <Col  xs={12} md={6} >
          <CreateTask 
            submit={submitTask} 
            creatingTask={creatingTask}
            success={success}
            setSuccess={setSuccess}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default ListTasks
