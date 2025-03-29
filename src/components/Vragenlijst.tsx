import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type {
  AntwoordenType,
  SchoolAdvies,
  Vervoer,
  ReistijdVoorkeur,
  SchoolGrootte,
  Voorziening,
  Leerstijl,
  Sfeer,
  ExtraActiviteit,
  VakkenVoorkeur,
  Begeleiding
} from '../types';

const initialAntwoorden: AntwoordenType = {
  schoolAdvies: [],
  vervoer: 'Op de fiets',
  reistijd: '15-30 minuten',
  schoolGrootte: 'Een middelgrote school',
  voorzieningen: [],
  leerstijl: 'In een groepje samenwerken',
  sfeer: 'Gezellig en veel activiteiten',
  extraActiviteiten: [],
  vakkenVoorkeur: 'Ik weet het nog niet',
  begeleiding: [],
  openVraag: ''
};

const vraagEmojis = {
  1: '🏫',  // schooladvies
  2: '🚲',  // vervoer
  3: '⏰',  // reistijd
  4: '🏢',  // schoolgrootte
  5: '🎨',  // voorzieningen
  6: '📚',  // leerstijl
  7: '🌟',  // sfeer
  8: '🎭',  // extra activiteiten
  9: '📝',  // vakkenpakket
  10: '🤝', // begeleiding
  11: '💭', // open vraag
};

const Vragenlijst: React.FC = () => {
  const navigate = useNavigate();
  const [currentVraag, setCurrentVraag] = useState(1);
  const [antwoorden, setAntwoorden] = useState<AntwoordenType>(initialAntwoorden);

  const updateAntwoord = (key: keyof AntwoordenType, value: any) => {
    setAntwoorden(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentVraag === 1 && antwoorden.schoolAdvies.length === 0) {
      alert('Selecteer minimaal één schooladvies om door te gaan.');
      return;
    }
    
    if (currentVraag < 11) {
      setCurrentVraag(prev => prev + 1);
    } else {
      localStorage.setItem('perfectMatchAntwoorden', JSON.stringify(antwoorden));
      navigate('/kijkwijzer');
    }
  };

  const handleBack = () => {
    if (currentVraag > 1) {
      setCurrentVraag(prev => prev - 1);
    }
  };

  const renderVraag = () => {
    switch (currentVraag) {
      case 1:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Welke schooladviezen heb je gekregen?</h3>
            <p className="text-sm text-gray-500 mb-4">Je mag meerdere adviezen selecteren</p>
            <div className="space-y-2">
              {['Praktijkonderwijs', 'VMBO basis', 'VMBO kader', 'VMBO gemengde leerweg', 
                'VMBO theoretische leerweg', 'HAVO', 'VWO'].map((advies) => (
                <label key={advies} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="checkbox"
                    name="schoolAdvies"
                    value={advies}
                    checked={antwoorden.schoolAdvies.includes(advies as SchoolAdvies)}
                    onChange={(e) => {
                      const nieuweAdviezen = e.target.checked
                        ? [...antwoorden.schoolAdvies, advies as SchoolAdvies]
                        : antwoorden.schoolAdvies.filter(a => a !== advies);
                      updateAntwoord('schoolAdvies', nieuweAdviezen);
                    }}
                    className="text-primary"
                  />
                  <span>{advies}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Hoe wil je het liefst naar je nieuwe school gaan?</h3>
            <div className="space-y-2">
              {['Lopend', 'Op de fiets', 'Met het openbaar vervoer (bus, tram, metro)', 
                'Mijn ouders/verzorgers brengen mij'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="vervoer"
                    value={optie}
                    checked={antwoorden.vervoer === optie}
                    onChange={(e) => updateAntwoord('vervoer', e.target.value as Vervoer)}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Hoeveel minuten wil je maximaal onderweg zijn naar school?</h3>
            <div className="space-y-2">
              {['Minder dan 15 minuten', '15-30 minuten', '30-45 minuten', 
                '45-60 minuten', 'Meer dan 60 minuten maakt mij niet uit'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="reistijd"
                    value={optie}
                    checked={antwoorden.reistijd === optie}
                    onChange={(e) => updateAntwoord('reistijd', e.target.value as ReistijdVoorkeur)}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Wat voor soort school past bij jou?</h3>
            <div className="space-y-2">
              {['Een kleine school waar iedereen elkaar kent', 'Een middelgrote school',
                'Een grote school met veel verschillende leerlingen', 'Geen voorkeur'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="schoolGrootte"
                    value={optie}
                    checked={antwoorden.schoolGrootte === optie}
                    onChange={(e) => updateAntwoord('schoolGrootte', e.target.value as SchoolGrootte)}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Welke extra voorzieningen vind jij belangrijk op school?</h3>
            <p className="text-sm text-gray-500 mb-2">Je mag meerdere dingen aankruisen</p>
            <div className="space-y-2">
              {['Sportvelden buiten', 'Binnen gymzaal/sporthal', 'Grote aula om te chillen',
                'Podium voor optredens en toneel', 'Kunstlokaal voor creatieve vakken',
                'Bibliotheek of studieruimte', 'Kantine met lekker eten',
                'Computers/laptops voor alle leerlingen'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="checkbox"
                    name="voorzieningen"
                    value={optie}
                    checked={antwoorden.voorzieningen.includes(optie as Voorziening)}
                    onChange={(e) => {
                      const nieuweVoorzieningen = e.target.checked
                        ? [...antwoorden.voorzieningen, optie as Voorziening]
                        : antwoorden.voorzieningen.filter(v => v !== optie);
                      updateAntwoord('voorzieningen', nieuweVoorzieningen);
                    }}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Hoe leer jij het liefst?</h3>
            <div className="space-y-2">
              {['Zelfstandig werken aan opdrachten', 'In een groepje samenwerken',
                'Luisteren naar uitleg van de leraar', 'Door dingen zelf uit te proberen',
                'Door te kijken naar voorbeelden'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="leerstijl"
                    value={optie}
                    checked={antwoorden.leerstijl === optie}
                    onChange={(e) => updateAntwoord('leerstijl', e.target.value as Leerstijl)}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Wat voor sfeer zoek je op een school?</h3>
            <div className="space-y-2">
              {['Rustig en gestructureerd', 'Gezellig en veel activiteiten',
                'Creatief en vrij', 'Sportief en actief',
                'Serieus en gericht op leren'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="sfeer"
                    value={optie}
                    checked={antwoorden.sfeer === optie}
                    onChange={(e) => updateAntwoord('sfeer', e.target.value as Sfeer)}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Welke extra activiteiten vind jij leuk?</h3>
            <p className="text-sm text-gray-500 mb-2">Je mag meerdere dingen aankruisen</p>
            <div className="space-y-2">
              {['Schoolreisjes en excursies', 'Sporttoernooien', 'Feesten en vieringen',
                'Muziek, toneel of dans', 'Techniek- of wetenschapsprojecten',
                'Taalreizen naar het buitenland', 'Maatschappelijke projecten'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="checkbox"
                    name="extraActiviteiten"
                    value={optie}
                    checked={antwoorden.extraActiviteiten.includes(optie as ExtraActiviteit)}
                    onChange={(e) => {
                      const nieuweActiviteiten = e.target.checked
                        ? [...antwoorden.extraActiviteiten, optie as ExtraActiviteit]
                        : antwoorden.extraActiviteiten.filter(a => a !== optie);
                      updateAntwoord('extraActiviteiten', nieuweActiviteiten);
                    }}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Wat vind jij belangrijk bij het kiezen van een vakkenpakket?</h3>
            <div className="space-y-2">
              {['Extra talen leren', 'Veel praktijkvakken', 'Creatieve vakken',
                'Exacte vakken', 'Sport en bewegen', 'Ik weet het nog niet'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="radio"
                    name="vakkenVoorkeur"
                    value={optie}
                    checked={antwoorden.vakkenVoorkeur === optie}
                    onChange={(e) => updateAntwoord('vakkenVoorkeur', e.target.value as VakkenVoorkeur)}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 10:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Welke begeleiding vind jij belangrijk?</h3>
            <p className="text-sm text-gray-500 mb-2">Je mag meerdere dingen aankruisen</p>
            <div className="space-y-2">
              {['Een vaste mentor die je goed kent', 'Extra hulp bij vakken die je moeilijk vindt',
                'Hulp bij het plannen van je huiswerk', 'Aandacht voor hoe het met je gaat',
                'Ruimte om zelfstandig te werken', 'Duidelijke regels en afspraken'].map((optie) => (
                <label key={optie} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <input
                    type="checkbox"
                    name="begeleiding"
                    value={optie}
                    checked={antwoorden.begeleiding.includes(optie as Begeleiding)}
                    onChange={(e) => {
                      const nieuweBegeleiding = e.target.checked
                        ? [...antwoorden.begeleiding, optie as Begeleiding]
                        : antwoorden.begeleiding.filter(b => b !== optie);
                      updateAntwoord('begeleiding', nieuweBegeleiding);
                    }}
                    className="text-primary"
                  />
                  <span>{optie}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 11:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Wat vind je verder nog belangrijk?</h3>
            <p className="text-sm text-gray-500 mb-4">Hier kun je alles opschrijven wat je nog belangrijk vindt voor je nieuwe school, maar waar nog niet naar is gevraagd.</p>
            <textarea
              value={antwoorden.openVraag}
              onChange={(e) => updateAntwoord('openVraag', e.target.value)}
              className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Schrijf hier je antwoord..."
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="card border-4 border-lucas-lightblue rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{vraagEmojis[currentVraag as keyof typeof vraagEmojis]}</span>
              <h2 className="text-2xl font-bold text-primary">Vraag {currentVraag} van 11</h2>
            </div>
            <div className="mt-2">
              <div className="bg-gray-200 rounded-full h-4 w-64">
                <div 
                  className="bg-lucas-green rounded-full h-4 transition-all duration-500"
                  style={{ width: `${(currentVraag / 11) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="text-lg text-lucas-green font-semibold">
            {Math.round((currentVraag / 11) * 100)}% klaar! 🎯
          </div>
        </div>

        <div className="mb-8 bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
          {renderVraag()}
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={handleBack}
            className="btn btn-secondary flex-1 py-3 rounded-xl flex items-center justify-center gap-2"
            disabled={currentVraag === 1}
          >
            ⬅️ Vorige vraag
          </button>
          <button
            onClick={handleNext}
            className="btn btn-primary flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transform transition-transform duration-200 hover:scale-105"
          >
            {currentVraag === 11 ? '🎉 Klaar!' : 'Volgende vraag ➡️'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vragenlijst; 