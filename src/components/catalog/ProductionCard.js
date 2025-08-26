import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, compat }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={`https://via.placeholder.com/400x300/7c3aed/fff?text=${name.replace(
          / /g,
          "+"
        )}`}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{compat}</p>
        <p className="text-xl font-bold text-purple-600 mt-2">CHF {price}.00</p>
        <Link
          to={`/produit/${id}`}
          className="btn-primary w-full mt-3 block text-center"
        >
          Voir
        </Link>
      </div>
    </div>
  );
}