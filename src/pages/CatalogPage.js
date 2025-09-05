import React from "react";
import ProductCard from "../components/catalog/ProductionCard";
import Loader from "./Loader";
import useProducts from "./useProducts";

export default function CatalogPage() {
  const { products, loading } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Catalogue</h1>
      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Type de produit</h3>
          {["Batteries", "Scooters", "Accessoires"].map((t) => (
            <label key={t} className="block">
              <input type="checkbox" defaultChecked={t === "Batteries"} /> {t}
            </label>
          ))}

          <h3 className="font-bold mt-4 mb-2">Compatibilité</h3>
          {["CityCoco", "Ninebot", "Xiaomi"].map((c) => (
            <label key={c} className="block">
              <input type="checkbox" /> {c}
            </label>
          ))}

          <h3 className="font-bold mt-4 mb-2">Prix (CHF)</h3>
          <input type="range" min="0" max="1200" className="w-full" />
        </aside>

        <div className="lg:col-span-3">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
