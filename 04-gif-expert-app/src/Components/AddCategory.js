import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  // Function to Input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    } else {
      console.warn("El campo no debe estar vacio o ser mayor a una letra");
    }
  };

  // What this object return?
  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
    </form>
  );
};

// This object is required...
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
