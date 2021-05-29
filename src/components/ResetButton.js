function ResetButton(props) {
  return (
    <button
      className="bg-gray-900 border-solid border-2 border-white text-white text-l font-bold px-4 rounded focus:outline-none hover:bg-gray-800"
      onClick={() => props.reset()}
    >
      Reset
    </button>
  );
}

export default ResetButton;
