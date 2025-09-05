import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "./api";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((list) => {
      const found = list.find((p) => String(p.id) === String(id));
      setProduct(
        found || {
          id,
          name: "Batterie Haute Performance 60V 20Ah",
          price: 499,
          compat: "CityCoco M1 / X2",
          image: `https://via.placeholder.com/1200x800/7c3aed/ffffff?text=Produit%20${id}`,
        }
      );
    });
  }, [id]);

  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-3xl font-bold text-purple-600 mb-4">CHF {product.price}.00</p>
          {product.compat && <p className="mb-4 text-gray-700">Compatibilité : {product.compat}</p>}
          <p className="mb-6">
            Optimisez l’autonomie et la puissance de votre trottinette avec notre batterie haute
            performance. Conçue pour une fiabilité maximale et une durée de vie prolongée.
          </p>
          <button className="btn-primary mb-8 w-full">Ajouter au panier</button>

          <h2 className="text-2xl font-bold mb-2">Fiche Technique</h2>
          <ul className="list-disc list-inside space-y-1 mb-8">
            {[
              "Capacité : 20 Ah",
              "Tension : 60 V",
              "Poids : 5,5 kg",
              "Dimensions : 280×120×70 mm",
              "Connecteur : XT60",
              "Certifications : CE, RoHS, UN38.3",
            ].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-2">Avis Clients</h2>
          <p>★★★★★ Super batterie, ma trottinette en redemande !</p>
        </div>
      </div>
    </div>
  );
}
