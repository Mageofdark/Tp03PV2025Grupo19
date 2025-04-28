import TaskList from './taskList'
import Taskform from './components/Taskform'
import {tasks as data} from "./tasks"
import { useEffect } from 'react';
import { useState } from 'react';
function App () {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  
  function createtask (task) {
    setTasks(...tasks, {title: task.title, description: task.description, id: tasks.length + 1});

  return (
    <>
      <Taskform createtask={createtask}/>
      <TaskList/>
    </>
  
)
}}
export default App