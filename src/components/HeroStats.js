import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import heroes from '../heroes.json';

function HeroStats() {
  const [selectedHero, setSelectedHero] = useState('');
  const [heroStats, setHeroStats] = useState({});

  function changeHero(e) {
    let heroName = e.target.value;
    setSelectedHero(heroName);
    setHeroStats(heroes.find((hero) => hero.name === heroName));
  }

  function increaseHeroStat(stat) {
    let newStats = cloneDeep(heroStats);
    newStats[stat]++;
    setHeroStats(newStats);
  }

  function decreaseHeroStat(stat) {
    let newStats = cloneDeep(heroStats);
    newStats[stat]--;
    setHeroStats(newStats);
  }

  function resetHeroStats() {
    setHeroStats(heroes.find((hero) => hero.name === selectedHero));
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

  return (
    <div className="w-full lg:w-1/2 px-2">
      <div className="max-w-md mx-auto">
        <select
          value={selectedHero}
          onChange={changeHero}
          className="p-2 rounded bg-white text-black text-2xl w-full"
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
  );
}

export default HeroStats;
