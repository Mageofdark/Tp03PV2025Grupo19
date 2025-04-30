function TaskCard({ task, deleteTask, crossOutTask }) {
  return (
    <div className="task-card">
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none', textDecorationColor: task.completed ? 'red' : 'none', textDecorationThickness: task.completed ? '3px' : 'none' }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <button onClick={() => crossOutTask(task.id)}>✔️</button>
      <button onClick={() => deleteTask(task.id)}>🗑️</button>
    </div>
  );
}

export default TaskCard;
