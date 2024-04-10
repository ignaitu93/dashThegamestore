import { useEffect, useState } from "react";

export function UsuariosInDb() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/usuarios`)
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <h1>Listado de Usuarios</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>imagen</th>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Rol</th> {/* Nuevo encabezado para el rol */}
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>
                <img
                  className="img-profile rounded-circle"
                  src={`Src/assets/img/${usuario.image}`} // Ruta completa para acceder a las imágenes
                  alt="Avatar de usuario"
                  width="100"
                />
              </td>
              <td>
                {usuario.first_name} {usuario.last_name}
              </td>
              <td>{usuario.email}</td>
              <td>{usuario.Rol.nombre}</td> {/* Mostrar el nombre del rol */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
