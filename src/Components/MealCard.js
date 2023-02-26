import { useState } from "react";
import Ingredints from "./Ingredints";

const MealCard = ({ meal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleIngredients = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex flex-wrap sm:flex-nowrap p-4 border justify-center gap-3 my-4 shadow-lg relative">
      <img
        className="w-56 h-56"
        src={meal?.strMealThumb}
        alt=""
      ></img>
      <div>
        <h2 className="text-2xl font-semibold  text-left w-fit  p-1  rounded-sm mb-2 text-cyan-500">
          {meal?.strMeal.toUpperCase()}
        </h2>
        <hr></hr>
        <h3 className="text-gray-600 text-left mt-2">{meal?.strInstructions}</h3>
        <button
          className="p-2 m-2 border border-gray font-semibold text-gray-600"
          onClick={toggleIngredients}
        >
          View Ingredients
        </button>
        {isVisible && (
          <Ingredints
            meal={meal}
            toggleIngredients={toggleIngredients}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        )}
      </div>
    </div>
  );
};

export default MealCard;
