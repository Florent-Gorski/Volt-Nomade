import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { CartProvider } from "./context/CartContext";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CatalogPage = React.lazy(() => import("./pages/CatalogPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const GuidesPage = React.lazy(() => import("./pages/GuidesPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogue" element={<CatalogPage />} />
            <Route path="/produit/:id" element={<ProductPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/panier" element={<CartPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
