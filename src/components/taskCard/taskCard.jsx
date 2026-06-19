export const TaskCard = ({task, handleDelete}) => {
  return (
    <>
        <li key={task.id} className={task.completed ? 'completed' : 'false'}>
          <span>{task.id}</span> - <span>{task.name}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>    
    </>
  )
}
