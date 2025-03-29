import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welkom from './components/Welkom';
import Vragenlijst from './components/Vragenlijst';
import Kijkwijzer from './components/Kijkwijzer';

function App() {
  return (
    <Router basename="/perfect-match">
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <img 
                  src="/images/lucas-onderwijs-logo.png" 
                  alt="Lucas Onderwijs" 
                  className="h-16 object-contain"
                />
                <div>
                  <h1 className="text-3xl font-bold text-primary">De Perfecte Match</h1>
                  <p className="text-gray-600">Vind de middelbare school die bij jou past</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Welkom />} />
            <Route path="/vragenlijst" element={<Vragenlijst />} />
            <Route path="/kijkwijzer" element={<Kijkwijzer />} />
          </Routes>
        </main>

        <footer className="bg-white shadow-sm mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            © {new Date().getFullYear()} Lucas Onderwijs - De Perfecte Match
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
