import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Volt-Nomade</h1>
          <p className="text-xl mb-2">Découvrir nos scooters électriques</p>
          <p className="mb-6">Mobilité électrique, fiable et suisse</p>
          <Link
            to="/catalogue"
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg"
          >
            Voir le catalogue
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Livraison rapide", desc: "En Suisse, 48h garantis." },
            { title: "Produits garantis", desc: "2 ans minimum." },
            { title: "Service client suisse", desc: "Réponse < 2h." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12 grid md:grid-cols-3 gap-6">
        {["Scooters électriques", "Batteries", "Accessoires"].map((cat) => (
          <Link
            key={cat}
            to="/catalogue"
            className="bg-white shadow rounded-lg p-6 text-center hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold">{cat}</h2>
          </Link>
        ))}
      </section>
    </>
  );
}