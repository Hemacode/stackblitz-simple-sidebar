import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Comment from './pages/Comment';
import Analytics from './pages/Analytics';
import Product from './pages/Product';
import Sidebar from './component/Sidebar';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}
