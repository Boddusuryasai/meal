import React from "react";

const Ingredints = ({ meal, toggleIngredients }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-lg shadow-lg p-6 text-gray-600 border border-white">
      <h3 className="text-lg font-semibold text-gray-600 mb-4">Ingredients</h3>
      <ul>
        {meal && Object.keys(meal)
          .filter((key) => key.includes("Ingredient"))
          .map(
            (key) =>
              meal[key] && (
                <li key={key} className="mb-2">
                  {meal[key]} - {meal[`strMeasure${key.slice(-1)}`]}
                </li>
              )
          )}
      </ul>
      <button
        className="p-2 m-2 border border-gray font-semibold text-gray-600"
        onClick={toggleIngredients}
      >
        Close
      </button>
    </div>
  );
};

export default Ingredints;
