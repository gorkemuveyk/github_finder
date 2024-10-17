import React, { useState } from "react";

const SearchInput = ({ setUserData }) => {
  const [username, setUsername] = useState("");

  const handleChangeInput = (data) => {
    if (data === "") return;
    setUsername(data);
  };

  const getUserData = () => {
    if (username === "") return;
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  return (
    <div className="w-full mt-32 shadow-lg bg-white rounded-2xl flex">
      <input
        type="text"
        onChange={(e) => handleChangeInput(e.target.value)}
        placeholder="GitHub username..."
        className="placeholder:italic p-5 rounded-l-2xl outline-none border-none w-full"
      />
      <button
        onClick={getUserData}
        className="p-5 rounded-r-2xl border-l bg-green-400 text-white"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchInput;
