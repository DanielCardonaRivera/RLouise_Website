/* Intento con tailwind

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f5f5f5', marginTop: '2rem' }}>
      <p>© {new Date().getFullYear()} RLouise Fashion. Todos los derechos reservados.</p>
    </footer>
  );
}*/

/*Intento con Bootstrap*/
export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <p className="mb-0">
        © {new Date().getFullYear()} <strong>RLouise Fashion</strong>. Todos los derechos reservados.
      </p>
    </footer>
  );
}

