import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
export default function Dropdowncharitycategory({ selected, handleChange }) {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
  ];
  //   const [selected, setSelected] = useState([]);

  return (
    <div className="mt-2">
      <MultiSelect
        options={options}
        value={selected}
        onChange={(values) => handleChange("charityCategories", values)}
        labelledBy="Select"
      />
    </div>
  );
}
