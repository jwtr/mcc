import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import ResetButton from './ResetButton';
import Stat from './Stat';
import villains from '../villains.json';

function VillainStats() {
  const [selectedVillain, setSelectedVillain] = useState('');
  const [villainStats, setVillainStats] = useState({});

  function changeVillain(e) {
    let villainName = e.target.value;
    setSelectedVillain(villainName);
    setVillainStats(villains.find((villain) => villain.name === villainName));
  }

  function increaseVillainStat(stat) {
    let newStats = cloneDeep(villainStats);
    newStats[stat]++;
    setVillainStats(newStats);
  }

  function decreaseVillainStat(stat) {
    let newStats = cloneDeep(villainStats);
    newStats[stat]--;
    setVillainStats(newStats);
  }

  function resetVillainStats() {
    setVillainStats(
      villains.find((villain) => villain.name === selectedVillain)
    );
  }

  function multiplyVillainStartingHealth(multiplier) {
    let newStats = cloneDeep(villainStats);
    let villainBaseHealth = villains.find(
      (villain) => villain.name === selectedVillain
    )['health'];
    newStats['health'] = villainBaseHealth * multiplier;
    setVillainStats(newStats);
  }

  return (
    <div className="w-full lg:w-1/2 px-2 mt-10 lg:mt-0">
      <div className="max-w-md mx-auto">
        <select
          value={selectedVillain}
          onChange={changeVillain}
          className="p-2 rounded bg-white text-black text-2xl w-full"
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
          {Object.entries(villainStats).map((stat) => {
            if (stat[0] === 'name') {
              return (
                <div key={villainStats.name} className="p-3 my-3 text-3xl">
                  {villainStats.name}
                </div>
              );
            } else {
              return (
                <Stat
                  key={stat[0]}
                  statValue={stat[1]}
                  statName={stat[0]}
                  increaseStat={increaseVillainStat}
                  decreaseStat={decreaseVillainStat}
                />
              );
            }
          })}

          {isFinite(String(villainStats.health)) && (
            <div className="flex justify-between p-2 my-3">
              Set starting health (optional)
              <button
                className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold ml-4 px-4 py-2 rounded focus:outline-none hover:bg-gray-800"
                onClick={() => multiplyVillainStartingHealth(1)}
              >
                1x
              </button>
              <button
                className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold ml-4 px-4 py-2 rounded focus:outline-none hover:bg-gray-800"
                onClick={() => multiplyVillainStartingHealth(2)}
              >
                2x
              </button>
              <button
                className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold ml-4 px-4 py-2 rounded focus:outline-none hover:bg-gray-800"
                onClick={() => multiplyVillainStartingHealth(3)}
              >
                3x
              </button>
              <button
                className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold ml-4 px-4 py-2 rounded focus:outline-none hover:bg-gray-800"
                onClick={() => multiplyVillainStartingHealth(4)}
              >
                4x
              </button>
            </div>
          )}
          <div className="mt-10">
            <ResetButton reset={resetVillainStats} />
          </div>
        </div>
      )}
    </div>
  );
}

export default VillainStats;
