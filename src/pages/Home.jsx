import React from 'react';
import '../App.css';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="container text-center">
        <h1 className="home-title">RLouise</h1>
        <p className="home-subtitle">Pijamas con estilo.</p>
        <a href="./Damas" className="btn-brand">Ver colección</a>
      </div>
    </section>
  );
}
