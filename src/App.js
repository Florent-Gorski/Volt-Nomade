import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

// Lazy-loaded pages (paths fixed to match project structure)
const HomePage = React.lazy(() => import("./HomePage"));
const CatalogPage = React.lazy(() => import("./CatalogPage"));
const ProductPage = React.lazy(() => import("./ProductPage"));
const GuidesPage = React.lazy(() => import("./GuidesPage"));
const ContactPage = React.lazy(() => import("./ContactPage"));

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
