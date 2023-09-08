import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Meals from "../Components/Meals";
function IngredientsMenu({ dishes }) {
  const { ing } = useParams();
  const [meals, setMeals] = useState([]);

  const getIng = () => {
    const filteredMeals = dishes.filter((meal) => {
      for (let i = 1; i <= 20; i++) {
        const ingred = meal[`strIngredient${i}`];
        if (ingred === ing) return true;
      }
      return false;
    });
    setMeals(filteredMeals);
  };

  useEffect(() => {
    getIng();
  }, [ing]);

  return (
    <>
      {meals.length > 0 ? (
        <Meals dishes={meals} />
      ) : (
        <div className="position-absolute top-50 start-30 fs-2 fw-bold">
          There are No Meals
        </div>
      )}
    </>
  );
}

export default IngredientsMenu;
