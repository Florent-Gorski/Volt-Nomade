import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-purple-600">
        Volt-Nomade
      </Link>
      <nav className="space-x-6 text-gray-700">
        <Link to="/">Accueil</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;