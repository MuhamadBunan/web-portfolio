import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SolutionsPage from "./pages/SolutionsPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/produk" element={<ProductsPage />} />
            <Route path="/produk/:slug" element={<ProductDetailPage />} />

            <Route path="/solusi" element={<SolutionsPage />} />

            <Route path="/layanan" element={<ServicesPage />} />

            <Route path="/proyek" element={<ProjectsPage />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticleDetailPage />} />

            <Route path="/tentang" element={<AboutPage />} />

            <Route path="/kontak" element={<ContactPage />} />

            <Route
              path="*"
              element={
                <section className="block">
                  <div className="wrap">
                    <h1>404</h1>
                    <p>Halaman yang Anda cari tidak ditemukan.</p>
                  </div>
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
