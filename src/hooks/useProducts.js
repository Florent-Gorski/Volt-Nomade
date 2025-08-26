import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(setProducts).finally(() => setLoading(false));
  }, []);

  return { products, loading };
};

export default useProducts;