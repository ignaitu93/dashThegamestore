import { useEffect, useState } from 'react';

export default function UltimoCreado() {
  const [ultimoProducto, setUltimoProducto] = useState(null);
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/ultimo-producto")
      .then((res) => res.json())
      .then((data) => {
        setUltimoProducto(data.data);
        // Luego de obtener el último producto, obtenemos su categoría
        obtenerCategoria(data.data.category_id);
      })
      .catch((error) => console.error(error));
  }, []);

  const obtenerCategoria = (categoryId) => {
    fetch(`http://localhost:3000/api/categorias/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoria(data.data.nombre); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="content">
      <h2>Último producto creado</h2>
      {ultimoProducto && categoria && (
        <article className="person-boxes">
          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={`src/assets/img/${ultimoProducto.image}`} alt="Producto" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{ultimoProducto.name}</h2>
              <p className="bio-position">Categoría: {categoria}</p>
              <p className="bio-position">Stock: {ultimoProducto.stock}</p>
              <p className="bio-position">Precio: ${ultimoProducto.price}</p>
            </div>
            <div className="box-actions">
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
