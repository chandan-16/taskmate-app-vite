import { useState } from 'react'
import { Header } from './components/header/header';
import { TaskList } from './components/tasklist/TaskList';
import { AddTask } from './components/addTask/AddTask';
import { Footer } from './components/footer/Footer';

import { taskData } from './data/data.js';

import './App.css'

function App() {

  const [tasks, setTasks] = useState(taskData);

  return (
    <>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer />
    </>
  )
}

export default App
