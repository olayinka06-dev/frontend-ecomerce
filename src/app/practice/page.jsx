"use client";
import React, { useState } from "react";

const page = () => {
  const [selectedOptions, setselectedOptions] = useState([]);
  const randomData = ["Hello", "car", "Boy", "Tade", "Bose"];
  const handleClick = (i) => {
    if (selectedOptions.includes(i)) {
        setselectedOptions(selectedOptions.filter(item => item = i))
    } else {
        setselectedOptions([...selectedOptions, i]);
    }
  };
  return (
    <div className="">
      {randomData.map((rd, i) => (
        <button
          className="py-2 ms-2 px-5 bg-green-600"
          key={i}
          onClick={() => handleClick(rd)}
        >
          {rd}
        </button>
      ))}
      <div className="flex flex-col gap-2">
        {selectedOptions.map((so, i) => (
          <button key={i}>{so}</button>
        ))}
      </div>
    </div>
  );
};

export default page;
