import { Component, lazy } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
const ProductList = lazy(() => import('./components/ProductList'));


const App: Component = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" component={ProductList}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
