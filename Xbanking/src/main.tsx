import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import Token from './pages/Token.tsx';
import Institutional from './pages/Institutional.tsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <BrowserRouter basename="/xbanking-app">
    <ScrollToTop />
    <Routes>
      <Route index element={<App />} />
      <Route path="" element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/app" element={<App />} />
      <Route path="/token" element={<Token />} />
      <Route path="/institutional" element={<Institutional />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);
