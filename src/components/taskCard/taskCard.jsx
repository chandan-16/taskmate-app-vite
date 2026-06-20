export const TaskCard = ({task, handleDelete}) => {
  return (
    <>
        <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
          <span>{task.id}</span> - <span>{task.name}</span>
          <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
        </li>    
    </>
  )
}
