export const AddTask = () => {
  return (
    <section>
        <form>
            <label htmlFor="">Task Name:</label>
            <input type="text" name="task" id="task" />
            <button type="submit">Add Task</button>
        </form>
    </section>
  )
}
