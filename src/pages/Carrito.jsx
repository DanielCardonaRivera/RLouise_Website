import React from 'react';

const productosEnCarrito = [
  {
    id: 1,
    nombre: 'Pijama Azul Luna',
    imagen: '/pijama1.jpg',
    precio: 45000,
    cantidad: 2,
  },
  {
    id: 2,
    nombre: 'Pijama Rosa Estrellas',
    imagen: '/pijama2.jpg',
    precio: 39000,
    cantidad: 1,
  },
];

export default function Carrito() {
  const total = productosEnCarrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Carrito de Compras</h1>

      {productosEnCarrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="row g-4">
          {/* Lista de productos */}
          <div className="col-12 col-lg-8">
            {productosEnCarrito.map((producto) => (
              <div className="card mb-3" key={producto.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8 d-flex flex-column justify-content-between p-3">
                    <div>
                      <h5 className="card-title">{producto.nombre}</h5>
                      <p className="card-text">Precio: ${producto.precio.toLocaleString()}</p>
                      <p className="card-text">Cantidad: {producto.cantidad}</p>
                    </div>
                    <button className="btn btn-outline-danger mt-2 w-50">Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Resumen</h4>
                <hr />
                <p className="card-text">
                  Total productos: {productosEnCarrito.reduce((acc, p) => acc + p.cantidad, 0)}
                </p>
                <p className="card-text fw-bold">Total a pagar: ${total.toLocaleString()}</p>
                <button className="btn btn-primary w-100 mt-3">Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
