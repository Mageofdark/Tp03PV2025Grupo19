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

  function createtask(task) {
    setTasks([...tasks, {
      title: task.title,
      description: task.description,
      id: tasks.length + 1,
    }]);
  }

  function deleteTask(taskid) {
    setTasks(tasks.filter((task) => task.id !== taskid));
  }
  return (
    <>
      <TaskForm createtask={createtask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}
export default App;
