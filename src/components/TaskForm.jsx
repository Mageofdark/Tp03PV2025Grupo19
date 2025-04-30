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
    <div className="form-container">
      <form className="task-form" onSubmit={handlesubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Escribe tu nueva tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          required
        />
        <textarea
          className="input-field"
          placeholder="Escriba la descripción de su tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="submit-button">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
