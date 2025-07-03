import FiltroLateral from '../components/FiltroLateral';
import ProductoCard from '../components/ProductoCard';

const productos = [
  {
    id: 1,
    nombre: 'Pijama Azul Luna',
    imagen: '/pijama1.jpg',
    nuevo: true,
  },
  {
    id: 2,
    nombre: 'Pijama Rosa Estrellas',
    imagen: '/pijama2.jpg',
    nuevo: true,
  },
  {
    id: 3,
    nombre: 'Pijama Cuadros',
    imagen: '/pijama3.jpg',
    nuevo: false,
  },
];

export default function Damas() {
  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-decoration-none text-primary">Inicio</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Para Ella
          </li>
        </ol>
      </nav>

      <h1 className="h3 fw-bold mb-4">PARA ELLA</h1>

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
