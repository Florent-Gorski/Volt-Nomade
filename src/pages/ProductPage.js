import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-4">Batterie Haute Performance</h1>
      <p className="text-3xl font-bold text-purple-600 mb-4">CHF 499.00</p>
      <p className="mb-4">
        Optimisez l'autonomie et la puissance de votre trottinette avec notre batterie haute
        performance. Conçue pour une fiabilité maximale et une durée de vie prolongée.
      </p>
      <button className="btn-primary">Ajouter au panier</button>

      <h2 className="text-2xl font-bold mt-8 mb-4">Fiche Technique</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Capacité : 20 Ah</li>
        <li>Tension : 60 V</li>
        <li>Poids : 5,5 kg</li>
        <li>Dimensions : 280×120×70 mm</li>
        <li>Connecteur : XT60</li>
        <li>Certifications : CE, RoHS, UN38.3</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Liste de Compatibilité</h2>
      <ul className="list-disc list-inside">
        <li>CityCoco M1</li>
        <li>CityCoco X2</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Avis Clients</h2>
      <p>★★★★★ Super batterie, ma trottinette en redemande !</p>
    </div>
  );
};

export default ProductPage;