import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  useParams();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Batterie Haute Performance 60V 20Ah</h1>
      <p className="text-3xl font-bold text-purple-600 mb-4">CHF 499.00</p>
      <p className="mb-4">
        Optimisez l’autonomie et la puissance de votre trottinette avec notre batterie haute
        performance. Conçue pour une fiabilité maximale et une durée de vie prolongée.
      </p>
      <button className="btn-primary mb-8">Ajouter au panier</button>

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

      <h2 className="text-2xl font-bold mb-2">Compatibilité</h2>
      <ul className="list-disc list-inside mb-8">
        <li>CityCoco M1</li>
        <li>CityCoco X2</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Avis Clients</h2>
      <p>★★★★★ Super batterie, ma trottinette en redemande !</p>
    </div>
  );
}