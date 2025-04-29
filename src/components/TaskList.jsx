import TaskCard from './TaskCard';

function TaskList({ tasks, deleteTask, crossOutTask }) { // Recibe tasks, deleteTask y crossOutTask como props
  if (tasks.length === 0) return <h2>No hay tareas :c</h2>;

  return (
    <div>
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