import { useState } from "react";

function Taskform() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    };
    createtask({
      title: title,
      description: description,
    });

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="text"> Añadir nueva tarea: </label>
        <br />
        <input
          id="text"
          type="text"
          placeholder="Escribe tu nueva tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escriba la descripcion de su tarea"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button> Guardar </button>
      </form>
    </div>
  );
}

export default Taskform;
