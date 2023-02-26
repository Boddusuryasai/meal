import React, { useState } from "react";

import MealCard from "./MealCard";
     

const Main = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState([]);
  

  const handleSearch = () => {
    fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((data) => data.json())
      .then((res) => {
        
       if(res.meals!=null) {
        setMeal(res.meals)
       }
      }).catch(err=>console.log(err));
  };

  return (
    <div>
      <div className="img flex flex-col items-center justify-center shadow-lg">
        <div>
          <input
            className="px-12 py-2 m-2 rounded-3xl focus:outline-none bg-slate-200  placeholder:font-semibold"
            placeholder="Enter Recipe name"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button
            className="px-3 py-2 m-2  rounded-3xl border border-gray font-semibold text-gray-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <h1 className="text-xl font-bold text-gray-600">
          Search Your Favourite Recipe
        </h1>
      </div>
     
      { meal.length>0 ?
        meal.map((meal, i) => {
          return <MealCard meal={meal} key={i} />;
        }):
         <div className="flex flex-row justify-center items-center flex-wrap gap-8 h-[50vh] mt-2">
        <img className="h-60" src="https://res.cloudinary.com/dybiiddob/image/upload/v1677335320/pexels-vicky-tran-2781540_bkznvr.jpg" alt="image1"></img>
        <img className="h-60" src="https://res.cloudinary.com/dybiiddob/image/upload/v1677335319/pexels-alan-retano-14853731_boa64m.jpg" alt="image2"></img>
        <img className="h-60" src="https://res.cloudinary.com/dybiiddob/image/upload/v1677335318/pexels-viktoria-alipatova-2074108_x2usgw.jpg" alt="image3"></img>
        <img className="h-60" src="https://res.cloudinary.com/dybiiddob/image/upload/v1677335569/pexels-taha-samet-arslan-7627414_athh2n.jpg" alt="image4"></img>
     </div>}
    </div>
  );
};

export default Main;
