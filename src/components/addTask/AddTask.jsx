import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({tasks, setTasks}) => {

  const [taskValue, setTaskValue] = useState('');
  const [progress, setProgress] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

  const handleReset = () => {
    setTaskValue('');
    setProgress(false);
  }

    const task = {
      id : Math.floor(Math.random() * 10000),
      name : taskValue,
      completed : Boolean(progress)
    }
    setTasks([...tasks, task])
    handleReset(); 
  }

  return (
    <section>
        <form onSubmit={handleSubmit}>

            <label htmlFor="">Task Name:</label>
            <input type="text" onChange={(e) => setTaskValue(e.target.value)} name="task" id="task" value={taskValue} placeholder="Task Name" autoComplete="off"/>
            
            <span onClick={() => handleReset()}>Reset</span>
            
            <select onChange={(event) => setProgress(event.target.value)} value={progress}>
              <option value="false">Pending</option>
              <option value="true">Completed</option>
            
            </select>
            <button type="submit">Add Task</button>

        </form>
          <p>{taskValue}</p>
    </section>
  )
}
