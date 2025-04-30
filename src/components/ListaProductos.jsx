import { useState } from "react";

const ListaProductos = ({ 
  productos, 
  productosConIVA, 
  productosCaros,
  onOrdenarPorPrecio,
  onAgregarProducto,
  onEliminarMasBarato
}) => {
  const [mostrarConIVA, setMostrarConIVA] = useState(false);
  const [mostrarCaros, setMostrarCaros] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    descripcion: '',
    precio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoProducto.descripcion && nuevoProducto.precio) {
      onAgregarProducto(nuevoProducto);
      setNuevoProducto({
        descripcion: '',
        precio: ''
      });
    }
  };

  return (
    <div>
      <div >
        <button onClick={onOrdenarPorPrecio}>Ordenar por precio</button>
        <button onClick={onEliminarMasBarato}>Eliminar más barato</button>
        <button onClick={() => setMostrarConIVA(!mostrarConIVA)}>
          {mostrarConIVA ? 'Ocultar IVA' : 'Mostrar con IVA'}
        </button>
        <button onClick={() => setMostrarCaros(!mostrarCaros)}>
          {mostrarCaros ? 'Ocultar caros' : 'Mostrar caros'}
        </button>
      </div>

      <h2>Añadir Nuevo Producto</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label>
            Descripción:
            <input
              type="text"
              name="descripcion"
              value={nuevoProducto.descripcion}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Precio:
            <input
              type="number"
              name="precio"
              value={nuevoProducto.precio}
              onChange={handleInputChange}
              min="0"
              required
            />
          </label>
        </div>
        <button type="submit">Agregar Producto</button>
      </form>

      <h2>Productos ({productos.length})</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.descripcion} - ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      {mostrarConIVA && (
        <>
          <h2>Productos con IVA (21%)</h2>
          <ul>
            {productosConIVA.map(producto => (
              <li key={producto.id}>
                {producto.descripcion} - ${producto.precio.toFixed(2)}
              </li>
            ))}
          </ul>
        </>
      )}

      {mostrarCaros && (
        <>
          <h2>Productos caros (precio mayor a $20000)</h2>
          <ul>
            {productosCaros.map(producto => (
              <li key={producto.id}>
                {producto.descripcion} - ${producto.precio.toFixed(2)}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ListaProductos;