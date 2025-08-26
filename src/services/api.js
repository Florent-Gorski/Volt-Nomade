// Simule une API
export const fetchProducts = () =>
  Promise.resolve([
    { id: 1, name: 'Scooter Xiaomi Pro 2', price: 499, image: 'scooter-hero.jpeg' },
    { id: 2, name: 'Batterie 36V 10Ah', price: 189 },
  ]);