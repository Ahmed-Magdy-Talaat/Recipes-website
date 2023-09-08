import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/128183106-healthy-food-balanced-food-cooking-ingredients-clean-diet-eating-top-view-with-copy-space.jpg";
function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const getIngredients = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      if (!response.ok) {
        throw new Error("Network response is not Ok !");
      }
      const ing = await response.json();
      setIngredients(ing.meals);
    } catch (error) {
      console.log("Error in fetching data .");
    }
  };
  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className="contain-dishes container pt-2 ">
      <div className="row gy-4">
        {ingredients.map((ing, index) => {
          const { strIngredient, strDescription } = ing;
          const txt =
            strDescription && strDescription.length > 150
              ? strDescription.substring(0, 50) + "..."
              : strDescription;
          return (
            <div
              className="contain-ing d-flex flex-column justify-content-center col-xl-3 col-lg-4 col-md-6 col-sm-12 h-17 text-center "
              key={index}
              onClick={() => navigate(`/Ingredients/${strIngredient}`)}
            >
              <div className="img-contain py-1">
                <img className="w-75" src={logo} alt={`ing${index}`} />
              </div>
              <div className="py-1 fw-bold">{strIngredient}</div>
              <div className="py-1 overflow-hidden">{txt}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ingredients;
