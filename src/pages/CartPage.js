import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, increment, decrement, removeItem, clear, totalCount, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
        <Link to="/catalogue" className="btn-primary">Voir le catalogue</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Panier</h1>
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.id} className="flex items-center gap-4 bg-white shadow rounded p-4">
            <img
              src={it.image || `https://via.placeholder.com/120x80/7c3aed/fff?text=${encodeURIComponent(it.name)}`}
              alt={it.name}
              width={120}
              height={80}
              className="rounded object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold">{it.name}</div>
              <div className="text-gray-600">CHF {it.price}.00</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn-primary" onClick={() => decrement(it.id)}>-</button>
              <span>{it.qty}</span>
              <button className="btn-primary" onClick={() => increment(it.id)}>+</button>
            </div>
            <button className="btn-primary" onClick={() => removeItem(it.id)}>Retirer</button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="text-lg">
          Total ({totalCount} articles) : <strong>CHF {totalPrice}.00</strong>
        </div>
        <div className="flex gap-3">
          <button className="btn-primary" onClick={clear}>Vider le panier</button>
          <button className="btn-primary">Passer au paiement</button>
        </div>
      </div>
    </div>
  );
}
