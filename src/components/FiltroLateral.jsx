export default function FiltroLateral() {
  return (
    <aside className="col-12 col-lg-3 mb-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title h5 mb-4">Filtrar</h2>

          {/* Tipo de prenda */}
          <div className="mb-4">
            <h3 className="h6 mb-2">Tipo de Prenda</h3>
            {['Batola', 'Capri', 'Levantadora', 'Pantalón', 'Short'].map((tipo) => (
              <div className="form-check" key={tipo}>
                <input className="form-check-input" type="checkbox" id={tipo} />
                <label className="form-check-label" htmlFor={tipo}>{tipo}</label>
              </div>
            ))}
          </div>

          {/* Talla */}
          <div className="mb-4">
            <h3 className="h6 mb-2">Talla</h3>
            <div className="d-flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL'].map((talla) => (
                <span
                  key={talla}
                  className="badge bg-secondary text-light p-2"
                >
                  {talla}
                </span>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <h3 className="h6 mb-2">Color</h3>
            <div className="d-flex flex-wrap gap-2">
              {['Azul', 'Rosa', 'Morado', 'Negro', 'Verde'].map((color) => (
                <span
                  key={color}
                  className="badge bg-light text-dark border p-2"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
