import { useState } from "react";
import { TaskCard } from "../taskCard/taskCard";


export const TaskList = ({tasks, setTasks}) => {

  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
    <div className="tasklist">
    <h1>Taskmate App</h1>
      <button onClick={() => setShow(!show)}>{show ? 'Hide Task' : 'Show Task'}</button>
      {
        show && tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
      ))
      } 
    </div> 
    </>
  )
}
