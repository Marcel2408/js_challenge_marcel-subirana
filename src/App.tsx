import React from 'react';
import './App.css';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import ProductPage from './pages/product-page/ProductPage.component';

function App() {
  return (
    <>
      <Header />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
