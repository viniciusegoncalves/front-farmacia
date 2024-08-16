import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="flex gap-6 mb-4">
      <ul className="flex gap-6">
        <li className="text-lg font-medium cursor-pointer">
          <Link
            to="/home"
            className="text-green-900 hover:text-green-700 transition-colors duration-300 hover:underline"
          >
            Home
          </Link>
        </li>
        <li className="text-lg font-medium cursor-pointer">
          <Link
            to="/produtos"
            className="text-green-900 hover:text-green-700 transition-colors duration-300 hover:underline"
          >
            Produtos
          </Link>
        </li>
        <li className="text-lg font-medium cursor-pointer">
          <Link
            to="/categorias"
            className="text-green-900 hover:text-green-700 transition-colors duration-300 hover:underline"
          >
            Categorias
          </Link>
        </li>
      </ul>
    </nav>
  );
}
