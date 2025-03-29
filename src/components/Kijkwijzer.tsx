import React, { useEffect, useState } from 'react';
import type { AntwoordenType } from '../types';
import html2pdf from 'html2pdf.js';

const sectieEmojis = {
  basis: '📚',
  leerstijl: '🎓',
  voorzieningen: '🎨',
  activiteiten: '🎭',
  vakken: '📝',
  begeleiding: '🤝',
  top5: '🏆',
  extra: '💭'
};

const Kijkwijzer: React.FC = () => {
  const [antwoorden, setAntwoorden] = useState<AntwoordenType | null>(null);
  const [top5Scholen, setTop5Scholen] = useState<string[]>(Array(5).fill(''));

  const handlePdfDownload = () => {
    const element = document.getElementById('kijkwijzer-content');
    const opt = {
      margin: 1,
      filename: 'mijn-perfecte-match.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    if (element) {
      html2pdf().set(opt).from(element).save();
    }
  };

  useEffect(() => {
    const opgeslagenAntwoorden = localStorage.getItem('perfectMatchAntwoorden');
    if (opgeslagenAntwoorden) {
      setAntwoorden(JSON.parse(opgeslagenAntwoorden));
    }
  }, []);

  if (!antwoorden) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="card border-4 border-lucas-orange rounded-2xl text-center py-12">
          <span className="text-6xl mb-4 block">🤔</span>
          <h2 className="text-2xl font-bold mb-4">Oeps! Geen antwoorden gevonden</h2>
          <p className="text-lg">
            Het lijkt erop dat je het spel nog niet hebt gespeeld. 
            Ga terug naar het begin om te starten!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div id="kijkwijzer-content" className="card border-4 border-lucas-green rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🎉</span>
            <h2 className="text-3xl font-bold text-primary">Jouw Perfecte Match!</h2>
          </div>
          <button
            onClick={handlePdfDownload}
            className="btn bg-lucas-green text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-lucas-green/90 transition-colors"
          >
            <span>📥</span>
            Download als PDF
          </button>
        </div>
        
        <div className="space-y-6">
          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.basis}</span>
              <h3 className="text-xl font-bold text-primary">Dit ben jij</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 mb-1">Jouw schooladvies</p>
                <div className="space-y-1">
                  {antwoorden.schoolAdvies.map((advies, index) => (
                    <p key={index} className="font-medium text-lg">{advies}</p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Zo wil je naar school</p>
                <p className="font-medium text-lg">{antwoorden.vervoer}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Reistijd die je oké vindt</p>
                <p className="font-medium text-lg">{antwoorden.reistijd}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Grootte van de school</p>
                <p className="font-medium text-lg">{antwoorden.schoolGrootte}</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.leerstijl}</span>
              <h3 className="text-xl font-bold text-primary">Zo leer jij het liefst</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 mb-1">Jouw leerstijl</p>
                <p className="font-medium text-lg">{antwoorden.leerstijl}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Sfeer die bij je past</p>
                <p className="font-medium text-lg">{antwoorden.sfeer}</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.voorzieningen}</span>
              <h3 className="text-xl font-bold text-primary">Dit vind jij belangrijk op school</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {antwoorden.voorzieningen.map((voorziening, index) => (
                <div key={index} className="flex items-center space-x-2 text-lg">
                  <span className="text-lucas-green">✓</span>
                  <span>{voorziening}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.activiteiten}</span>
              <h3 className="text-xl font-bold text-primary">Deze activiteiten vind jij leuk</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {antwoorden.extraActiviteiten.map((activiteit, index) => (
                <div key={index} className="flex items-center space-x-2 text-lg">
                  <span className="text-lucas-green">✓</span>
                  <span>{activiteit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.vakken}</span>
              <h3 className="text-xl font-bold text-primary">Jouw vakkenpakket</h3>
            </div>
            <p className="font-medium text-lg">{antwoorden.vakkenVoorkeur}</p>
          </section>

          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.begeleiding}</span>
              <h3 className="text-xl font-bold text-primary">Zo wil jij geholpen worden</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {antwoorden.begeleiding.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-lg">
                  <span className="text-lucas-green">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.extra}</span>
              <h3 className="text-xl font-bold text-primary">Dit vind je ook nog belangrijk</h3>
            </div>
            <p className="text-lg">{antwoorden.openVraag || 'Geen extra opmerkingen.'}</p>
          </section>

          <section className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{sectieEmojis.top5}</span>
              <div>
                <h3 className="text-xl font-bold text-primary">Top 5 scholen</h3>
                <p className="text-gray-600">Dit is mijn top 5 van scholen</p>
              </div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-lucas-green">{num}.</span>
                  <input
                    type="text"
                    value={top5Scholen[num - 1]}
                    onChange={(e) => {
                      const newTop5 = [...top5Scholen];
                      newTop5[num - 1] = e.target.value;
                      setTop5Scholen(newTop5);
                    }}
                    placeholder={`School ${num}`}
                    className="flex-1 p-2 border-b-2 border-gray-200 focus:border-lucas-green focus:outline-none text-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 p-6 bg-lucas-lightblue/10 rounded-xl border-2 border-lucas-lightblue/20">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💪</span>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Wat nu?</h3>
              <div className="space-y-4 text-lg">
                <p>
                  Super goed dat je hebt nagedacht over wat jij belangrijk vindt in een school! 
                  Gebruik deze kijkwijzer als je naar open dagen gaat.
                </p>
                <p>
                  Tip: Download deze pagina als PDF of maak een foto met je telefoon, 
                  dan heb je hem altijd bij de hand! 📱
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kijkwijzer; 