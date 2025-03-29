import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welkom from './components/Welkom';
import Vragenlijst from './components/Vragenlijst';
import Kijkwijzer from './components/Kijkwijzer';

function App() {
  return (
    <Router basename="/perfect-match">
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm p-4">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <img 
              src={`${process.env.PUBLIC_URL}/images/lucas-onderwijs-logo.png`} 
              alt="Lucas Onderwijs Logo" 
              className="h-12"
            />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Welkom />} />
          <Route path="/vragenlijst" element={<Vragenlijst />} />
          <Route path="/kijkwijzer" element={<Kijkwijzer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
