import React from "react";
import { useNavigate } from "react-router-dom";
export const Meals = ({ dishes }) => {
  const navigate = useNavigate();
  return (
    <div className="contain-dishes container pt-2 ">
      <div className="row gy-4">
        {dishes.map((dish, index) => {
          const { strMealThumb, strMeal } = dish;
          return (
            <div
              onClick={() => navigate(`/dish/${dish.strMeal}`)}
              className=" col-xl-3 col-lg-4 col-md-6 col-sm-1 "
              key={index}
            >
              <div className="dish-contain  position-relative">
                <div className="img-contain">
                  <img
                    className="w-100"
                    src={strMealThumb}
                    alt={`dish${index}`}
                  />
                </div>
                <div className="position-absolute bottom-0 left-0 right-0 d-flex align-content-center align-items-center justify-content-center w-100 layer fs-2">
                  {strMeal}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Meals;
