import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          Volt-Nomade
        </Link>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/">Accueil</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <nav className="md:hidden px-4 pb-2 space-y-1">
          {["/", "/catalogue", "/guides", "/contact"].map((p, i) => (
            <Link
              key={p}
              to={p}
              className="block py-1"
              onClick={() => setOpen(false)}
            >
              {["Accueil", "Catalogue", "Guides", "Contact"][i]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}