import { useState } from 'react'

import './App.css'

function App() {

  const [tasks, setTasks] = useState([
      {id: 1, name: 'Build React Projects', completed : true},
      {id: 2, name: 'Play Video Games', completed : false},
    ]);

  const [show, setShow] = useState(false);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // onClick={handleDelete(task.id)}

  return (
    <>
      <h1>Taskmate App</h1>
      <button onClick={() => setShow(!show)}>{show ? 'Hide Task' : 'Show Task'}</button>
      {
        show && tasks.map((task) => (
        <li key={task.id}>
          <span>{task.id}</span> - <span>{task.name}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))
      }
    </>
  )
}

export default App
