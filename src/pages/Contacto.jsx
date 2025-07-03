import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);

    // Aquí podrías conectar con un backend usando fetch o axios
    // fetch('/api/contacto', { method: 'POST', body: JSON.stringify(formData), ... })

    alert('Mensaje enviado correctamente.');
    setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' });
  };

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Contáctanos</h1>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="correo" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="asunto" className="form-label">Asunto</label>
          <input
            type="text"
            className="form-control"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </div>
      </form>
    </div>
  );
}
