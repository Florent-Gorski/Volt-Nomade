import React from "react";

const ProductCard = ({ name, price, image, compat }) => (
  <div className="card">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{compat}</p>
      <p className="text-xl font-bold text-purple-600 mt-2">CHF {price}.00</p>
      <button className="btn-primary w-full mt-2">Ajouter au panier</button>
    </div>
  </div>
);

export default ProductCard;