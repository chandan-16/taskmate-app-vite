import { useState } from "react";
import { TaskCard } from "../taskCard/taskCard";
import { taskData } from './../../data/data';

export const TaskList = () => {

  const [tasks, setTasks] = useState(taskData);
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
    <h1>Taskmate App</h1>
      <button onClick={() => setShow(!show)}>{show ? 'Hide Task' : 'Show Task'}</button>
      {
        show && tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
      ))
      }  
    </>
  )
}
