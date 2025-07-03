import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Damas from './pages/Damas';
import Caballeros from './pages/Caballeros';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="bg-gray-50 min-vh-100 d-flex flex-column">
      <Navbar />

      <main className="flex-grow-1 px-4 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/damas" element={<Damas />} />
          <Route path="/caballeros" element={<Caballeros />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
