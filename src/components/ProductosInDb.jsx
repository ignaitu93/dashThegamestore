import  { useEffect, useState } from 'react';

function ProductosInDb() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/productos")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProductos(data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div><h1>Listado de Productos</h1></div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>
                                <img
                                    className="img-profile rounded-circle"
                                    src={`Src/assets/img/${producto.image}`}
                                    alt="Imagen de producto"
                                    width="100"
                                />
                            </td>
                            <td>{producto.name}</td>
                            <td>{producto.description}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ProductosInDb;
