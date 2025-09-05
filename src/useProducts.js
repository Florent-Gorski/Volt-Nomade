import { useEffect, useState } from "react";
import { fetchProducts } from "./api";

const normalize = (p) => ({
  id: p.id,
  name: p.name,
  price: p.price,
  image: p.image || `https://via.placeholder.com/800x600/7c3aed/ffffff?text=${encodeURIComponent(p.name)}`,
  compat: p.compat || "",
});

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((list) => setProducts(list.map(normalize)))
      .catch((e) => setError(e?.message || "Erreur chargement produits"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default useProducts;
