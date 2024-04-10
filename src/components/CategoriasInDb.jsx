import  { Component } from "react";

class CategoriasInDb extends Component {
  constructor() {
    super();
    this.state = {
      categoriasList: [], // Inicializar como un array vacío
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/categorias")
      .then((respuesta) => respuesta.json())
      .then((categorias) => this.setState({ categoriasList: categorias.data }));
      // Aquí se asume que la respuesta tiene una propiedad 'data' que contiene el array de categorías
  }

  render() {
    return (
      <>
        <section className="content">
          <h2 className="mt-3">Categorías</h2>
          <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <button
              type="button"
              className="list-group-item list-group-item-action active text-center"
              aria-current="true"
            >
              Listado de categorías de los productos
            </button>
            {this.state.categoriasList.length > 0 ? (
              this.state.categoriasList.map((categoria) => (
                <div className="list-group-item" key={categoria.id}>
                  {categoria.nombre}
                </div>
              ))
            ) : (
              <div className="list-group-item">Cargando...</div>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default CategoriasInDb;
