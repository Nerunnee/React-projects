export const Button = ({ handleError }) => {
  return (
    <div>
      <button
        className="w-104 bg-black text-white px-3 py-2.5 rounded-md"
        onClick={handleError}
      >
        {"Continue 1/3 >"}
      </button>
    </div>
  );
};
