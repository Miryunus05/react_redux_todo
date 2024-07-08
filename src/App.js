import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './storee/store';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;