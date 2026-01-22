export const Button = ({ formsValue }) => {
  return (
    <div>
      <button
        className="w-104 bg-black text-white px-3 py-2.5 rounded-md"
        onClick={formsValue}
      >
        {"Continue 1/3 >"}
      </button>
    </div>
  );
};
