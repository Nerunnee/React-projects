export const NextButton = ({ handleError, step }) => {
  return (
    <div>
      <button
        className="w-full bg-black text-white px-3 py-2.5 rounded-md"
        onClick={handleError}
      >
        {`Continue ${step}/3`}
      </button>
    </div>
  );
};
