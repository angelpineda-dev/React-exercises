import React, { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Digimon",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   // setCategories([...categories, "HunterXHunter"]);
  //   setCategories((categories) => [...categories, "Otro anime"]);
  // };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
