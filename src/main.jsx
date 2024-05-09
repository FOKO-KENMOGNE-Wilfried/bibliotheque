import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index.jsx';
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import GlobalStyle from './utils/GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
