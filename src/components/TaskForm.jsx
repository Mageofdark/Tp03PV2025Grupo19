import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Escribe tu nueva tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          required
        />
        <textarea
          placeholder="Escriba la descripcion de su tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button> Guardar </button>
      </form>
    </div>
  );
}

export default TaskForm;