import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meals from "../Components/Meals";

function CategoryMenu({ dishes }) {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  const getCategory = () => {
    const filteredMeals = dishes.filter((meal) => {
      const { strCategory } = meal;
      return strCategory === category;
    });
    setMeals(filteredMeals);
  };

  useEffect(() => {
    getCategory();
  }, [category]);
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

export default CategoryMenu;
