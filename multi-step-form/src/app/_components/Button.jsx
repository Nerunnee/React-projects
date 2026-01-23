export const Button = ({ forms }) => {
  const testR = () => {
    console.log(forms);
  };
  return (
    <div>
      <button
        className="w-104 bg-black text-white px-3 py-2.5 rounded-md"
        onClick={testR}
      >
        {"Continue 1/3 >"}
      </button>
    </div>
  );
};
