import { tasks as data } from './tasks'
import { useState, useEffect } from 'react'

function TaskList(){
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        setTasks(data)
    }, [])

    if(tasks.length == 0)
        return <h1> No hay tareas :c </h1>

    return (
        <div> 
            {
                tasks.map((task) => (
                    <div key={task.id}>
                        <h2> {task.title} </h2>
                    </div>
                ))
            }
        </div>
    );
}

export default TaskList