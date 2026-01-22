export const Buttons = ({ onChangeFilter, filter, index, selectedButton }) => {
  return (
    <div>
      <button
        key={index}
        className={`rounded-md py-1 px-3 hover:bg-blue-500 ${selectedButton === filter ? " bg-blue-500 text-white" : "text-black bg-gray-300"}`}
        onClick={() => onChangeFilter(filter)}
      >
        {filter}
      </button>
    </div>
  );
};
