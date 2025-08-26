import React from 'react';
import Button from '../components/common/Button';

const HomePage = () => (
  <section className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Bienvenue chez Volt-Nomade</h1>
    <p className="mb-6">Mobilité électrique suisse, fiable et puissante.</p>
    <Button to="/catalogue">Découvrir les produits</Button>
  </section>
);

export default HomePage;