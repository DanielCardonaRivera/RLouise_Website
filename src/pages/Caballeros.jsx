// src/pages/Caballeros.jsx
import FiltroLateral from '../components/FiltroLateral';
import ProductoCard from '../components/ProductoCard';

const productos = [
  {
    id: 4,
    nombre: 'Pijama Gris Noche',
    imagen: '/pijama4.jpg',
    nuevo: true,
  },
  {
    id: 5,
    nombre: 'Pijama Rayas Oscuras',
    imagen: '/pijama5.jpg',
    nuevo: false,
  },
  {
    id: 6,
    nombre: 'Pijama Clásica Azul',
    imagen: '/pijama6.jpg',
    nuevo: false,
  },
];

export default function Caballeros() {
  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-decoration-none text-primary">Inicio</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Para Él
          </li>
        </ol>
      </nav>

      <h1 className="h3 fw-bold mb-4">PARA ÉL</h1>

      {/* Grid Layout */}
      <div className="row">
        {/* Filtro lateral */}
        <FiltroLateral />

        {/* Productos */}
        <div className="col-12 col-lg-9">
          <div className="row g-4">
            {productos.map((producto) => (
              <div className="col-12 col-sm-6 col-md-4" key={producto.id}>
                <ProductoCard producto={producto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
