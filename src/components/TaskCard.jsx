function TaskCard({ task, deleteTask, crossOutTask }) {
  return (
    <div>
      <ul>
        <li>
          <h2 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </h2>
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
          </p>
        </li>
      </ul>
      <button onClick={() => crossOutTask(task.id)}> Realizada </button>
      <button onClick={() => deleteTask(task.id)}> Eliminar </button>
    </div>
  );
}
export default TaskCard;
