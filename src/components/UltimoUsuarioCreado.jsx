import { useEffect, useState } from 'react';

export default function UltimoUCreado() {
  const [ultimoUsuario, setUltimoUsuario] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/ultimo-usuario")
      .then((res) => res.json())
      .then((data) => {
        setUltimoUsuario(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="content">
      <h2>Último usuario creado</h2>
      {ultimoUsuario && (
        <article className="person-boxes">
          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={`src/assets/img/${ultimoUsuario.image}`} alt="Usuario" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{ultimoUsuario.first_name} {ultimoUsuario.last_name}</h2>
              <p className="bio-position">{ultimoUsuario.email}</p>
              <p className="bio-position">Fecha de creación: {formatDate(ultimoUsuario.createdAt)}</p>
            </div>
            <div className="box-actions">
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
