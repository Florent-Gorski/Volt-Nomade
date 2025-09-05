// Simule une API
export const fetchProducts = () =>
  Promise.resolve([
    { id: 1, name: "Scooter Xiaomi Pro 2", price: 499, image: "https://images.unsplash.com/photo-1549317661-5e5b0e8af6f3?q=80&w=1200&auto=format&fit=crop", compat: "Xiaomi Pro 2" },
    { id: 2, name: "Batterie 36V 10Ah", price: 189, image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=1200&auto=format&fit=crop", compat: "Xiaomi M365" },
    { id: 3, name: "Batterie 60V 20Ah", price: 499, compat: "CityCoco M1 / X2" },
  ]);
