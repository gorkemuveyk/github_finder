import React from "react";

const SearchInput = () => {
  return (
    <div className="w-full shadow-2xl bg-white rounded-2xl flex">
      <input
        type="text"
        className="p-7 rounded-l-2xl outline-none border-none w-full"
      />
      <button className="p-6 rounded-r-2xl border-l bg-green-400 text-white">
        Ara
      </button>
    </div>
  );
};

export default SearchInput;
