export const BackButton = ({ handleBackStep }) => {
  return (
    <div>
      <button
        className="w-full text-black border border-gray-400 px-3 py-2.5 rounded-md"
        onClick={handleBackStep}
      >
        {"< Back"}
      </button>
    </div>
  );
};
