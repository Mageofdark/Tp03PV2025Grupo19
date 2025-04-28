import TaskCard from './TaskCard';

function TaskList({ tasks, deleteTask }) { // Recibe tasks y deleteTask como props
  if (tasks.length === 0) return <h1>No hay tareas :c</h1>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;