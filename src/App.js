import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import heroes from './heroes.json';

function App() {
  const [selectedHero, setSelectedHero] = useState('');
  const [heroStats, setHeroStats] = useState({});

  function changeHero(e) {
    let heroName = e.target.value;
    setSelectedHero(heroName);
    setHeroStats(heroes.find((hero) => hero.name === heroName));
  }

  function increaseStat(stat) {
    let newStats = cloneDeep(heroStats);
    newStats[stat]++;
    setHeroStats(newStats);
  }

  function decreaseStat(stat) {
    let newStats = cloneDeep(heroStats);
    newStats[stat]--;
    setHeroStats(newStats);
  }

  function resetStats() {
    setHeroStats(heroes.find((hero) => hero.name === selectedHero));
  }

  function IncreaseStatButton(props) {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => increaseStat(props.stat)}
      >
        +
      </button>
    );
  }

  function DecreaseStatButton(props) {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => decreaseStat(props.stat)}
      >
        -
      </button>
    );
  }

  return (
    <div className="flex flex-col h-screen text-white">
      <header className="p-5 bg-gray-700 text-center text-5xl font-display">
        Marvel Champions Companion
      </header>
      <main className="flex-1 overflow-y-auto p-5 bg-gray-700 text-center">
        <div className="max-w-md mx-auto">
          <select
            value={selectedHero}
            onChange={changeHero}
            className="p-2 rounded bg-white text-black text-2xl"
          >
            <option value="">Select your hero...</option>
            {heroes.map((hero) => {
              return (
                <option key={hero.name} value={hero.name}>
                  {hero.name}
                </option>
              );
            })}
          </select>
        </div>
        {selectedHero && Object.keys(heroStats).length > 0 && (
          <div className="max-w-md mx-auto font-display">
            <div className="p-3 my-3 text-3xl">{heroStats.name}</div>
            <div className="flex justify-between bg-gray-900 p-2 my-3 border-solid border-4 border-white text-2xl">
              <DecreaseStatButton stat={'health'} />
              HP: {heroStats.health}
              <IncreaseStatButton stat={'health'} />
            </div>
            <div className="flex justify-between bg-blue-600 p-2 my-3 border-solid border-4 border-white text-2xl">
              <DecreaseStatButton stat={'thwart'} />
              THW: {heroStats.thwart}
              <IncreaseStatButton stat={'thwart'} />
            </div>
            <div className="flex justify-between bg-red-600 p-2 my-3 border-solid border-4 border-white text-2xl">
              <DecreaseStatButton stat={'attack'} />
              ATK: {heroStats.attack}
              <IncreaseStatButton stat={'attack'} />
            </div>
            <div className="flex justify-between bg-green-600 p-2 my-3 border-solid border-4 border-white text-2xl">
              <DecreaseStatButton stat={'defence'} />
              DEF: {heroStats.defence}
              <IncreaseStatButton stat={'defence'} />
            </div>
            <div className="flex justify-between bg-gray-900 p-2 my-3 border-solid border-4 border-white text-2xl">
              <DecreaseStatButton stat={'hand'} />
              Hand: {heroStats.hand}
              <IncreaseStatButton stat={'hand'} />
            </div>
            <div className="p-3 my-3 text-3xl">{heroStats.ego}</div>
            <div className="flex justify-between bg-yellow-500 p-2 my-3 border-solid border-4 border-white text-2xl">
              <DecreaseStatButton stat={'recovery'} />
              REC: {heroStats.recovery}
              <IncreaseStatButton stat={'recovery'} />
            </div>
            <div className="flex justify-between bg-gray-900 p-2 my-3 border-solid border-4 border-white text-2xl">
              <DecreaseStatButton stat={'egoHand'} />
              Hand: {heroStats.egoHand}
              <IncreaseStatButton stat={'egoHand'} />
            </div>
            <div className="mt-10">
              <button
                className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold px-4 rounded focus:outline-none hover:bg-gray-800"
                onClick={() => resetStats()}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
