import type { Component } from 'solid-js';
import Header from './components/Header';
import ProductList from './components/ProductList';

const cartItem = {
  id: 1,
  title: "test",
  price: 9.99,
  quantity: 1
};

const product = {
  id: 1,
  title: "test",
  description: "desc",
  price: 9.99,
  category: "Category",
  image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  rating: {
    rate: 2.6,
    count: 1
  }
};



const App: Component = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default App;
