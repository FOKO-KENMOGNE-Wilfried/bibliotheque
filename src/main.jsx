import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index.jsx';
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import GlobalStyle from './utils/GlobalStyle.jsx';
import Book from './pages/Book/index.jsx';
import Event from './pages/Event/index.jsx';
import Event_detail from './pages/Event_detail/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/book' element={ <Book /> } />
        <Route path='/event' element={ <Event /> } />
        <Route path='/event_detail' element={ <Event_detail /> } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
