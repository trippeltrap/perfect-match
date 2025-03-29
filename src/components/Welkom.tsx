import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welkom: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="card border-4 border-lucas-orange rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-primary flex items-center gap-2">
          Hoi! Leuk dat je er bent! 👋
        </h2>
        <p className="text-lg mb-6">
          Zit jij in groep 8? Dan ga je binnenkort naar de middelbare school. 
          Spannend hè? 🎒 Met dit spel help ik je ontdekken welke school het beste bij jou past!
        </p>

        <div className="bg-lucas-lightblue/10 p-6 rounded-xl mb-6 border-2 border-lucas-lightblue/20">
          <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
            <span>Zo werkt het</span> 
            <span className="text-2xl">🎮</span>
          </h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <span>Je beantwoordt 10 leuke vragen over wat jij belangrijk vindt</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">📝</span>
              <span>Je krijgt een handige kijkwijzer die je meeneemt naar open dagen</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <span>Je ontdekt welk soort school het beste bij jou past</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigate('/vragenlijst')}
          className="btn btn-primary w-full text-xl py-4 rounded-xl transform transition-transform duration-200 hover:scale-105 flex items-center justify-center gap-2"
        >
          Start het spel! 🚀
        </button>
      </div>

      <div className="mt-6 card bg-lucas-green/10 border-4 border-lucas-green/20 rounded-2xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-primary mb-2">Wist je dat?</h3>
            <p className="text-lg">
              2 van de 10 leerlingen wisselt na het eerste jaar van school. 
              Best veel hè? Daarom is het super belangrijk om nu goed na te denken 
              over wat jij fijn vindt in een school! 🎯
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welkom; 