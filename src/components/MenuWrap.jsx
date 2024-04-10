import logoTGS from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function MenuWrap() {
  return (
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <Link to="http://localhost:3000/">
            <img src={logoTGS} alt="Logo the game store	" />
          </Link>
        </div>
        <figcaption>The Game Store</figcaption>
      </figure>
      <nav>
        <section className="dicover">
          <h3>Opciones</h3>
          <ul>
            <li>
              <Link to="/">
                <i
                  className="bi bi-house"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Home
              </Link>
            </li>
            <li>
              <Link to="/productos">
                <i
                  className="bi bi-basket"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Productos
              </Link>
            </li>
            <li>
              <a href="/usuarios">
                <i
                  className="bi bi-person"
                  style={{
                    fontSize: "1.2rem",
                    color: "cornflowerblue",
                    marginRight: "5px",
                  }}
                ></i>
                Usuarios
              </a>
            </li>
            <li>
              <Link to="/categorias">
                <i
                  className="bi bi-grid"
                  style={{
                    fontSize: "1.2rem",
                    color: "cornflowerblue",
                    marginRight: "5px",
                  }}
                ></i>
                Categorías
              </Link>
            </li>
            <li>
              <Link to="/ultimo">
                <i className="bi bi-bar-chart"></i>- Ultimo prod creado
              </Link>
            </li>
            <li>
              <Link to="/ultimoUser">
                <i className="bi bi-bar-chart"></i>- Ultimo User creado
              </Link>
            </li>
            <li>
              <Link to="/statistics">
                <i className="bi bi-graph-up"></i>- Estadísticas
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
