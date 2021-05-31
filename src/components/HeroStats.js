import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import ResetButton from './ResetButton';
import Stat from './Stat';
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
          {Object.entries(heroStats).map((stat) => {
            if (stat[0] === 'name') {
              return (
                <div key={heroStats.name} className="p-3 my-3 text-3xl">
                  {heroStats.name}
                </div>
              );
            } else if (stat[0] === 'ego') {
              return (
                <div key={heroStats.ego} className="p-3 my-3 text-3xl">
                  {heroStats.ego}
                </div>
              );
            } else {
              return (
                <Stat
                  key={stat[0]}
                  statValue={stat[1]}
                  statName={stat[0]}
                  increaseStat={increaseHeroStat}
                  decreaseStat={decreaseHeroStat}
                />
              );
            }
          })}
          <div className="mt-10">
            <ResetButton reset={resetHeroStats} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroStats;
