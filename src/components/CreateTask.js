import React, { useState } from 'react'
import Axios from 'axios'

const CreateTask = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [number, setNumber] = useState("")

  function submit() {

    const datos = {
      name: name,
      description: description,
      number: number,
      done: false
    }

    Axios.post('http://task.test/api/v1/tasks', datos)
      .then(response => console.log(response.data))
      .catch(error => console.log(Object.assign({}, error)))
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        submit()
      }}>
        <label htmlFor="name">Nombre:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        <br />
        <label htmlFor="description">Descripción:</label>
        <input type="text" id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} />
        <br />
        <label htmlFor="number">Numero:</label>
        <input type="text" id="number" name="number" value={number} onChange={e => setNumber(e.target.value)} />
        <div><button type="submit">Crear</button></div>
      </form>
    </div>
  )
}

export default CreateTask
