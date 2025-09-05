import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalCount } = useCart();
  const { pathname } = useLocation();

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`px-2 py-1 rounded ${
        pathname === to ? "text-purple-700 font-semibold" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          Volt-Nomade
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/catalogue">Catalogue</NavLink>
          <NavLink to="/guides">Guides</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <Link to="/panier" className="relative inline-flex items-center px-2 py-1">
            <span aria-hidden>🛒</span>
            {totalCount > 0 && (
              <span
                className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white px-1.5 py-0.5 rounded-full"
                aria-label={`${totalCount} article${totalCount > 1 ? "s" : ""} dans le panier`}
              >
                {totalCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Burger */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir/fermer le menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden px-4 pb-3 space-y-1 border-t border-gray-100">
          <Link to="/" className="block py-2" onClick={() => setOpen(false)}>Accueil</Link>
          <Link to="/catalogue" className="block py-2" onClick={() => setOpen(false)}>Catalogue</Link>
          <Link to="/guides" className="block py-2" onClick={() => setOpen(false)}>Guides</Link>
          <Link to="/contact" className="block py-2" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/panier" className="block py-2" onClick={() => setOpen(false)}>
            Panier {totalCount > 0 ? `(${totalCount})` : ""}
          </Link>
        </nav>
      )}
    </header>
  );
}
