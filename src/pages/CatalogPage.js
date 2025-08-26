import React from "react";
import ProductCard from "../components/catalog/ProductCard";

const mockProducts = [
  {
    id: 1,
    name: "Batterie longue durée",
    price: 189,
    image: "https://via.placeholder.com/400x300/7c3aed/fff?text=Batterie+36V",
    compat: "pour Xiaomi M365",
  },
  {
    id: 2,
    name: "Batterie longue durée",
    price: 299,
    image: "https://via.placeholder.com/400x300/7c3aed/fff?text=Batterie+48V",
    compat: "pour Xiaomi M365",
  },
  {
    id: 3,
    name: "Batterie longue durée",
    price: 499,
    image: "https://via.placeholder.com/400x300/7c3aed/fff?text=Batterie+60V",
    compat: "CityCoco M1",
  },
];

const CatalogPage = () => (
  <div className="container mx-auto px-6 py-8">
    <h1 className="text-4xl font-bold mb-8">Catalogue</h1>

    <div className="grid lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <aside className="lg:col-span-1 bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Type de produit</h3>
        <label className="block"><input type="checkbox" defaultChecked /> Batteries</label>
        <label className="block"><input type="checkbox" /> Scooters</label>
        <label className="block"><input type="checkbox" /> Accessoires</label>

        <h3 className="font-bold mt-4 mb-2">Compatibilité</h3>
        {["CityCoco", "Ninebot", "Xiaomi"].map((c) => (
          <label key={c} className="block"><input type="checkbox" /> {c}</label>
        ))}

        <h3 className="font-bold mt-4 mb-2">Tension (V)</h3>
        {["36V", "48V", "60V"].map((v) => (
          <label key={v} className="block"><input type="checkbox" /> {v}</label>
        ))}

        <h3 className="font-bold mt-4 mb-2">Capacité (Ah)</h3>
        {["10Ah", "20Ah", "30Ah+"].map((a) => (
          <label key={a} className="block"><input type="checkbox" /> {a}</label>
        ))}

        <h3 className="font-bold mt-4 mb-2">Prix (CHF)</h3>
        <input type="range" min="0" max="1000" className="w-full" />
      </aside>

      {/* Grid */}
      <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  </div>
);

export default CatalogPage;