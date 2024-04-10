import { Route, Routes } from "react-router-dom";
import Error404 from "./Error404";
import Productos from "./ProductosInDb";
import Ultimo from "./UltimoProdCreado";
import Statistics from "./Statistics/Statistics";
import Categorias from "./CategoriasInDb";
import { UsuariosInDb } from "./UsuariosInDb";
import UltimoU from "./UltimoUsuarioCreado";
import Carrusel from "./Carrusel";
export default function ContentWrap() {
  return (
    <>
      <main className="content-wrap">
        <Routes>
          <Route path="/" exact element={<Carrusel />} />
          <Route path="/categorias" exact element={<Categorias />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/ultimo" element={<Ultimo />} />
          <Route path="/ultimouser" element={<UltimoU />} />
          <Route path="/usuarios" exact element={< UsuariosInDb/>} />
          <Route
            path="/statistics"
            element={
              <Statistics
                props={[
                  {
                    titulo: "Total de productos",
                    cifra: 100, // Ejemplo de cifra, reemplazar con el valor real
                    icono: "bi bi-bag",
                    colorIcono: "blue",
                  },
                  {
                    titulo: "Total de usuarios",
                    cifra: 50, // Ejemplo de cifra, reemplazar con el valor real
                    icono: "bi bi-person",
                    colorIcono: "green",
                  },
                  {
                    titulo: "Total de categorías",
                    cifra: 10, // Ejemplo de cifra, reemplazar con el valor real
                    icono: "bi bi-list",
                    colorIcono: "orange",
                  },
                ]}
              />
            }
          />
          <Route component={Error404} />
        </Routes>
      </main>
    </>
  );
}