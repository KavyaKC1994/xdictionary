import React, { useState } from "react";

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm
    );

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <p style={{ padding: "1px", marginTop: "-10px", fontWeight: "bold" }}>
          Definition:
        </p>
        <p>{searchResult}</p>
      </div>
    </div>
  );
};

export default XDictionary;
