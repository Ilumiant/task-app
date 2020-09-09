import React, { useState, useEffect } from 'react'
import Axios from 'axios' // npm install axios
function Tasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    Axios.get('http://task.test/api/v1/tasks').then(response => setTasks(response.data))
  },[])

  return (
    <div>
      {tasks.map(task => (
        <div>
          <div>
            <span>{task.id}.- {task.name}</span>
            <input type="checkbox" value="realizado" checked={task.done} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tasks
