import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
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
  );
}

export default VillainStats;
