import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <section className="text-center">
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <h1 className="text-5xl font-bold mb-4">Volt-Nomade</h1>
      <p className="text-xl mb-6">Découvrir nos scooters électriques</p>
      <p className="mb-2 text-lg">Mobilité électrique, fiable et suisse</p>
      <Link
        to="/catalogue"
        className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold"
      >
        Voir le catalogue
      </Link>
    </div>

    <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      {["Livraison rapide en Suisse", "Produits garantis", "Service client suisse"].map(
        (txt, i) => (
          <div key={i} className="p-4">
            <h3 className="font-bold text-xl mb-2">{txt}</h3>
            <p className="text-gray-600 text-sm">
              {i === 0 && "Recevez vos produits rapidement, sans frais de douane imprévus."}
              {i === 1 && "Toutes nos batteries et accessoires sont garantis 2 ans."}
              {i === 2 && "Une question ? Notre équipe basée en Suisse vous répond rapidement."}
            </p>
          </div>
        )
      )}
    </div>

    <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
      {["Scooters électriques", "Batteries", "Accessoires"].map((cat) => (
        <Link
          key={cat}
          to="/catalogue"
          className="bg-white shadow rounded-lg p-6 hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold">{cat}</h2>
        </Link>
      ))}
    </div>
  </section>
);

export default HomePage;