import TaskCard from './TaskCard';

function TaskList({ tasks, deleteTask, crossOutTask }) {
  if (tasks.length === 0) return <h2>No hay tareas :c</h2>;

  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <TaskCard 
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          crossOutTask={crossOutTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
