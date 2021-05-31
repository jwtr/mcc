function Stat(props) {
  const backgroundColors = {
    health: 'bg-gray-900',
    thwart: 'bg-blue-600',
    attack: 'bg-red-600',
    defence: 'bg-green-600',
    hand: 'bg-gray-900',
    recovery: 'bg-yellow-500',
    egoHand: 'bg-gray-900',
    scheme: 'bg-blue-600',
  };
  let backgroundColor = backgroundColors[props.statName];

  const shortNames = {
    health: 'HP',
    thwart: 'THW',
    attack: 'ATK',
    defence: 'DEF',
    hand: 'HAND',
    recovery: 'REC',
    egoHand: 'HAND',
    scheme: 'SCH',
  };
  let shortName = shortNames[props.statName];

  function IncreaseStatButton() {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => props.increaseStat(props.statName)}
      >
        +
      </button>
    );
  }

  function DecreaseStatButton() {
    return (
      <button
        className="bg-white text-gray-900 text-l font-bold px-2 rounded focus:outline-none hover:opacity-50"
        onClick={() => props.decreaseStat(props.statName)}
      >
        -
      </button>
    );
  }

  return (
    <div
      className={`flex justify-between p-2 my-3 border-solid border-4 border-white text-2xl ${backgroundColor}`}
    >
      {isFinite(String(props.statValue)) && <DecreaseStatButton />}
      <p className="text-center w-full">
        {shortName}: {props.statValue}
      </p>
      {isFinite(String(props.statValue)) && <IncreaseStatButton />}
    </div>
  );
}

export default Stat;
