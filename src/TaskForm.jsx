function TaskForm(){
    return (
        <form>
            <label htmlFor="text"> Añadir nueva tarea: </label>
            <br/>
            <input id="text" type="text" required/>
            <button> Guardar </button>
        </form>
    )
}

export default TaskForm