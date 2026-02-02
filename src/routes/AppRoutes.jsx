import Header from "../components/homePage/Header";
import  Home  from "../components/homePage/Home";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import FooterSection from "../components/homePage/Footer";
import Favorites from "../components/homePage/Favorites";
import Cart from "../components/homePage/Cart";

import EducationalWebsites from "../components/websitesPage/EducationalWebsites";
import BusinessWebsites from "../components/websitesPage/BusinessWebsites";
import ConstructionWebsites from "../components/websitesPage/ConstructionWebsites";
import HealthcareWebsites from "../components/websitesPage/HealthCareWebsites";
import RealEstateWebsites from "../components/websitesPage/RealEstateWebsites";
import ElectronicalProducts from "../components/productsPage/ElectronicalProducts";
import BeautySection from "../components/productsPage/BeautyProducts";
import FashionProducts from "../components/productsPage/FashionProducts";
import ProductDetailPage from "../components/productsPage/ProductDetailPage";
import WebsiteDetailPage from "../components/websitesPage/WebsiteDetailPage";
import AddProductPage from "../components/sellerPage/AddProductFormPage";
import ViewWebsite from "../components/sellerPage/ViewWebsite";
import ViewProduct from "../components/sellerPage/ViewProduct";
import ScrollToTop from "../common/ScrollToTop";
export default function AppRoutes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/websites/education" element={<EducationalWebsites />} />
          <Route path="/websites/business" element={<BusinessWebsites />} />
          <Route path="/websites/construction" element={<ConstructionWebsites />} />
          <Route path="/websites/health-care" element={<HealthcareWebsites />} />
          <Route path="/websites/real-estate" element={<RealEstateWebsites />} />
          <Route path="/products/electronics" element={<ElectronicalProducts />} />
          <Route path="/products/beauty" element={<BeautySection />} />
          <Route path="/products/fashion" element={<FashionProducts />} />
          <Route path="/products/details" element={<ProductDetailPage />} />
          <Route path="/websites/details" element={<WebsiteDetailPage />} />
          <Route path="/sellers/add-product" element={<AddProductPage />} />
          <Route path="/sellers/ViewWebsite" element={<ViewWebsite />} />
          <Route path="/sellers/ViewProduct" element={<ViewProduct />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </Provider>
  );
}
