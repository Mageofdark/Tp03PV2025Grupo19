import { productos as initialProducts } from "./productos";
import ListaProductos from "./components/ListaProductos";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./tasks";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  const [productos, setProductos] = useState(initialProducts);

  useEffect(() => {
    setTasks(data);
    mostrarProductosEnConsola();
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
  function mostrarProductosEnConsola() {
    console.log("--- Productos en consola ---");
    productos.forEach(producto => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
  }

  function productosConIVA() {
    return productos.map(producto => ({
      ...producto,
      precio: producto.precio * 1.21
    }));
  }

  function productosCaros() {
    return productos.filter(producto => producto.precio > 20000);
  }

  function ordenarPorPrecio() {
    const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(ordenados);
  }

  function agregarProducto(nuevoProducto) {
    setProductos([...productos, {
      id: productos.length + 1,
      descripcion: nuevoProducto.descripcion,
      precio: parseFloat(nuevoProducto.precio)
    }]);
  }

  function eliminarMasBarato() {
    if (productos.length === 0) return;
    
    const precioMasBajo = Math.min(...productos.map(p => p.precio));
    const nuevosProductos = productos.filter(p => p.precio !== precioMasBajo);
    setProductos(nuevosProductos);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Lista de Tareas</h1>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} crossOutTask={crossOutTask} />
      <h1>Lista de Productos</h1>
      <ListaProductos 
        productos={productos}
        productosConIVA={productosConIVA()}
        productosCaros={productosCaros()}
        onOrdenarPorPrecio={ordenarPorPrecio}
        onAgregarProducto={agregarProducto}
        onEliminarMasBarato={eliminarMasBarato}
      />
    </>
  );
}
export default App;
