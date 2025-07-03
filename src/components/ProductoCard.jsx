export default function ProductoCard({ producto }) {
  return (
    <div className="card h-100 shadow-sm position-relative">
      {producto.nuevo && (
        <span className="position-absolute top-0 start-0 badge bg-danger m-2">Nuevo</span>
      )}

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="card-img-top"
        style={{ height: '260px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex align-items-center justify-content-center">
        <h5 className="card-title text-center">{producto.nombre}</h5>
      </div>
    </div>
  );
}
