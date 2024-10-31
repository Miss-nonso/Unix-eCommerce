import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Product from './components/Product';
import './App.css';

const App = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Navbar />
          <div>
            <h1>Product List</h1>
            <div className="product-list">
              {products.map(product => (
                <Product key={product.id} product={product} />
              ))}
         
            </div>
          </div>
          <Cart />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
