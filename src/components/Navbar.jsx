import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">RLouise</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/damas">DAMAS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/caballeros">CABALLEROS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">CARRITO DE COMPRAS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">CONTACTO</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
