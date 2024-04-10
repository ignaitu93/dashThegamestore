import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Statistics.module.css';

const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="content-wrap">
      <section className="content">
        <h2 className={`mt-3 ${style.title}`}>Estadísticas</h2>
        <div className="info-boxes">
          {stats ? (
            <>
              <div className="info-box">
                <div className="box-icon">
                  <i className={`${style.icon} ${style.infoboxesIcon}`} style={{ color: "#00F" }}></i>
                </div>
                <div className="box-content">
                  <span className={style.big}>{stats.totalProductos}</span>
                  Total de productos
                </div>
              </div>
              <div className="info-box">
                <div className="box-icon">
                  <i className={`${style.icon} ${style.infoboxesIcon}`} style={{ color: "#0F0" }}></i>
                </div>
                <div className="box-content">
                  <span className={style.big}>{stats. totalUsuarios}</span>
                    Total de usuarios
                </div>
              </div>
              <div className="info-box">
                <div className="box-icon">
                  <i className={`${style.icon} ${style.infoboxesIcon}`} style={{ color: "#F00" }}></i>
                </div>
                <div className="box-content">
                  <span className={style.big}>{stats.totalCategorias}</span>
                  Total de categorías
                </div>
              </div>
            </>
          ) : (
            <p className={style.loading}>Cargando...</p>
          )}
        </div>
        <button>
          <Link to="/">Volver a Home</Link>
        </button>
      </section>
    </main>
  );
};

export default Stats;
