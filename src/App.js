// src/App.js
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CatalogPage = React.lazy(() => import("./pages/CatalogPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const GuidesPage = React.lazy(() => import("./pages/GuidesPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<CatalogPage />} />
          <Route path="/produit/:id" element={<ProductPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
