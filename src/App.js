import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import heroes from './heroes.json';
import villains from './villains.json';

function App() {
  const [selectedHero, setSelectedHero] = useState('');
  const [selectedVillain, setSelectedVillain] = useState('');
  const [heroStats, setHeroStats] = useState({});
  const [villainStats, setVillainStats] = useState({});

  function changeHero(e) {
    let heroName = e.target.value;
    setSelectedHero(heroName);
    setHeroStats(heroes.find((hero) => hero.name === heroName));
  }

  function changeVillain(e) {
    let villainName = e.target.value;
    setSelectedVillain(villainName);
    setVillainStats(villains.find((villain) => villain.name === villainName));
  }

  function increaseHeroStat(stat) {
    let newStats = cloneDeep(heroStats);
    newStats[stat]++;
    setHeroStats(newStats);
  }

  function increaseVillainStat(stat) {
    let newStats = cloneDeep(villainStats);
    newStats[stat]++;
    setVillainStats(newStats);
  }

  function decreaseHeroStat(stat) {
    let newStats = cloneDeep(heroStats);
    newStats[stat]--;
    setHeroStats(newStats);
  }

  function decreaseVillainStat(stat) {
    let newStats = cloneDeep(villainStats);
    newStats[stat]--;
    setVillainStats(newStats);
  }

  function resetHeroStats() {
    setHeroStats(heroes.find((hero) => hero.name === selectedHero));
  }

  function resetVillainStats() {
    setVillainStats(
      villains.find((villain) => villain.name === selectedVillain)
    );
  }

  function IncreaseHeroStatButton(props) {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => increaseHeroStat(props.stat)}
      >
        +
      </button>
    );
  }

  function IncreaseVillainStatButton(props) {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => increaseVillainStat(props.stat)}
      >
        +
      </button>
    );
  }

  function DecreaseHeroStatButton(props) {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => decreaseHeroStat(props.stat)}
      >
        -
      </button>
    );
  }

  function DecreaseVillainStatButton(props) {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => decreaseVillainStat(props.stat)}
      >
        -
      </button>
    );
  }

  return (
    <div className="flex flex-col h-screen text-white bg-gray-700">
      <header className="p-5 bg-gray-700 text-center text-5xl font-display">
        Marvel Champions Companion
      </header>
      <main className="flex flex-wrap overflow-y-auto p-5 text-center">
        <div className="w-full lg:w-1/2 px-2">
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
                <DecreaseHeroStatButton stat={'health'} />
                HP: {heroStats.health}
                <IncreaseHeroStatButton stat={'health'} />
              </div>
              <div className="flex justify-between bg-blue-600 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseHeroStatButton stat={'thwart'} />
                THW: {heroStats.thwart}
                <IncreaseHeroStatButton stat={'thwart'} />
              </div>
              <div className="flex justify-between bg-red-600 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseHeroStatButton stat={'attack'} />
                ATK: {heroStats.attack}
                <IncreaseHeroStatButton stat={'attack'} />
              </div>
              <div className="flex justify-between bg-green-600 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseHeroStatButton stat={'defence'} />
                DEF: {heroStats.defence}
                <IncreaseHeroStatButton stat={'defence'} />
              </div>
              <div className="flex justify-between bg-gray-900 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseHeroStatButton stat={'hand'} />
                Hand: {heroStats.hand}
                <IncreaseHeroStatButton stat={'hand'} />
              </div>
              <div className="p-3 my-3 text-3xl">{heroStats.ego}</div>
              <div className="flex justify-between bg-yellow-500 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseHeroStatButton stat={'recovery'} />
                REC: {heroStats.recovery}
                <IncreaseHeroStatButton stat={'recovery'} />
              </div>
              <div className="flex justify-between bg-gray-900 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseHeroStatButton stat={'egoHand'} />
                Hand: {heroStats.egoHand}
                <IncreaseHeroStatButton stat={'egoHand'} />
              </div>
              <div className="mt-10">
                <button
                  className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold px-4 rounded focus:outline-none hover:bg-gray-800"
                  onClick={() => resetHeroStats()}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/2 px-2 mt-10 lg:mt-0">
          <div className="max-w-md mx-auto">
            <select
              value={selectedVillain}
              onChange={changeVillain}
              className="p-2 rounded bg-white text-black text-2xl"
            >
              <option value="">Select your villain...</option>
              {villains.map((villain) => {
                return (
                  <option key={villain.name} value={villain.name}>
                    {villain.name}
                  </option>
                );
              })}
            </select>
          </div>
          {selectedVillain && Object.keys(villainStats).length > 0 && (
            <div className="max-w-md mx-auto font-display">
              <div className="p-3 my-3 text-3xl">{villainStats.name}</div>
              <div className="flex justify-between bg-gray-900 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseVillainStatButton stat={'health'} />
                HP: {villainStats.health}
                <IncreaseVillainStatButton stat={'health'} />
              </div>
              <div className="flex justify-between bg-blue-600 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseVillainStatButton stat={'scheme'} />
                SCH: {villainStats.scheme}
                <IncreaseVillainStatButton stat={'scheme'} />
              </div>
              <div className="flex justify-between bg-red-600 p-2 my-3 border-solid border-4 border-white text-2xl">
                <DecreaseVillainStatButton stat={'attack'} />
                ATK: {villainStats.attack}
                <IncreaseVillainStatButton stat={'attack'} />
              </div>
              <div className="mt-10">
                <button
                  className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold px-4 rounded focus:outline-none hover:bg-gray-800"
                  onClick={() => resetVillainStats()}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
