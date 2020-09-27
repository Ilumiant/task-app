import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner, Table } from 'react-bootstrap'
import Formulario from './Formulario'
import Formulario2 from './Formulario2'
import Formulario2Otro from './Formulario2Otro'
import { API_URL } from '../constants'


const List = () => {
  //useStates para las lista de tareas
  const [tasks, setTasks] = useState([])
  const [loandingLista, setLoandingLista] = useState(true)
  const [success, setSuccess] = useState(false)
  //useState para el boton Formulario
  const [botonLoanding, setBotonLoanding] = useState(false)
  const [formularioEdit, setFormularioEdit] = useState(false)
  const [takeId, setTakeId] = useState()
  const [takeName, setTakeName] = useState()
  const [takeDescription, setTakeDescription] = useState()
  const [takeNumber, setTakeNumber] = useState()
  const [takeDone, setTakeDone] = useState()
  const [editTask, setEditTask] = useState({})
//useEffect para traer los datos desde el servidor
    useEffect(() => {
        getTask()

    },[])
 const editRow = (task) =>{
  setFormularioEdit(true)
  
  setTakeId(task.id)
  setTakeName(task.name)
  setTakeDescription(task.description)
  setTakeNumber(task.number)
  setTakeDone(task.done)

  setEditTask(task)
 }

function getTask() {
  Axios.get(`${API_URL}/tasks`)
  .then(
      (event)=>
      setTasks(event.data),
      setLoandingLista(false)
      
  )
}
    
  function submitTask (datos){
    setBotonLoanding(true)
    const tasksAux = [...tasks]
    tasksAux.push({
        id: tasks.length +1,
      ...datos
    })
    setTasks(tasksAux)
  Axios.post(`${API_URL}/tasks`,datos)
  .then(
    ()=>{
      getTask()
      setBotonLoanding(false)
      setSuccess(true)


    }
  )
  }

  function login () {
    const credenciales = {
      email: "jose@mail.com",
      password: "123123" 
    }
    Axios.post(`${API_URL}/login`,credenciales)
    .then((response)=>{
        console.log(response.data)
        localStorage.setItem("token", response.data.access_token)
      }
    )
  }

  function getMe () {
    let token = localStorage.getItem('token');
    Axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    Axios.post(`${API_URL}/me`)
    .then((response)=>{
        console.log(response.data)
      }
    )
  }

  function Eliminar (id) {
    Axios.delete(`${API_URL}/tasks/${id}`)
    .then( ()=>{
        getTask()
      }
    )
  }

  function Editar (id,datos) {
      Axios.put(`${API_URL}/tasks/${id}`,datos)
      .then(
        ()=>{
          getTask()
        }
      )
  }

  return (
    <Row>
      <Col className="col-6">
    <h1 className="text-center">Lista de Tareas</h1>
{loandingLista ?
(<div className="text-center"> 
 <Spinner animation="border" />
</div>
) :
(<Table >
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>numero</th>
    </tr>
  </thead>
  {tasks.map((task)=>(

  <tbody key={task.id}>
    <tr>
  <td >{task.id}</td>
  <td>{task.name}</td>
  <td>{task.description}</td>
  <td>
    <button className="btn btn-danger btn-sm"
    onClick={() => Eliminar(task.id)}
    >
      Eliminar
    </button>

    <button className="btn btn-success btn-sm"
        onClick={
            () =>  {
              editRow(task)
            
            }
        }>
      Editar
    </button>
    </td>
    </tr>
  </tbody>
   ))}
</Table>)
}

  

 
      </Col>
      <Col className="col-6">
        {formularioEdit ?
        (         
        <Formulario2Otro 
          task={editTask}
          Editar={Editar}
        />
        // <Formulario2
        //   submit={submitTask}
        //   botonLoanding={botonLoanding}
        //   success={success}
        //   setSuccess={setSuccess}
        //   formularioEdit={formularioEdit}  
        //   editRow={editRow}
        //   takeId={takeId}
        //   takeName={takeName}
        //   takeDescription={takeDescription}
        //   takeNumber={takeNumber}
        //   takeDone={takeDone}
        //   setTakeName={setTakeName}
        //   setTakeDescription={setTakeDescription}
        //   setTakeNumber={setTakeNumber}
        //   setTakeDone={setTakeDone}
        //   Editar={Editar}
        //   />
        ) :
        (        <Formulario 
          submit={submitTask}
          botonLoanding={botonLoanding}
          success={success}
          setSuccess={setSuccess}
  
          />)
      }



        
      </Col>
    </Row>
  )
}

export default List
