import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meals from "../Components/Meals";

function AreaMenu({ dishes }) {
  const { country } = useParams();
  const [meals, setMeals] = useState([]);

  const getArea = () => {
    const filteredMeals = dishes.filter((meal) => {
      const { strArea } = meal;
      return strArea === country;
    });
    setMeals(filteredMeals);
  };

  useEffect(() => {
    getArea();
  }, [country]);

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

export default AreaMenu;
