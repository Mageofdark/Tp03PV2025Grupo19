import TaskList from './taskList'
import Taskform from './Taskform'
import {task as data} from "./tasks"
import { useEffect } from 'react';

function App () {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  
  function createtask (task) {
    setTasks(...tasks, {title: task.title, description: task.description, id: tasks.length + 1});

  return (
    <>
      <taskform createtask={createtask}/>
      <TaskList/>
    </>
  
)
}}