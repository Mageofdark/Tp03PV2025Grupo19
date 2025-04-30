import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./tasks";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      description: task.description,
      id: tasks.length + 1,
      completed: false,
    }]);
  }

  function deleteTask(taskid) {
    setTasks(tasks.filter((task) => task.id !== taskid));
  }

  function crossOutTask(taskid){
    setTasks(tasks.map(task => {
      if(task.id === taskid)
        return { ...task, completed: !task.completed };
      else
        return task;
    }));
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Lista de Tareas</h1>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} crossOutTask={crossOutTask} />
    </>
  );
}
export default App;
