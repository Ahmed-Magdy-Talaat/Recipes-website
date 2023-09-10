import React from "react";
import { useParams } from "react-router-dom";

function Reciepe({ meals }) {
  const { dishName } = useParams();
  const dish = meals.find((meal) => meal.strMeal === dishName);
  const ingredientsArray = [];
  for (let i = 0; i < 20; i++) {
    let ingredientKey = `strIngredient${i + 1}`;
    let measureKey = `strMeasure${i + 1}`;
    const ingredient = dish[ingredientKey];
    const measure = dish[measureKey];
    if (ingredient && measure) {
      ingredientsArray.push({ ingredient, measure });
    }
  }
  const {
    strMealThumb,
    strTags,
    strYoutube,
    strArea,
    strCategory,
    strMeal,
    strInstructions,
    strSource,
  } = dish;
  let tags = [];
  if (strTags) {
    tags = strTags.split(",");
  }
  return (
    <div className="container">
      <div className="row-lg col-md gx-4">
        <div className="fsp d-flex flex-column gap-3 col-lg-4 col-md-12">
          <div className="w-100">
            <img className="w-100" src={strMealThumb} alt={strMeal} />
          </div>
          <div className="fs-3 fw-bold text-center">{strMeal}</div>
          <div className="d-flex gap-2 align-content-center align-items-center justify-content-center">
            <div className="fs-4 fw-bold">Area :</div>
            <div className="">{strArea}</div>
          </div>

          <div className="d-flex gap-2 align-content-center align-items-center justify-content-center">
            <div className="fs-4 fw-bold">Category :</div>
            <div className="">{strCategory}</div>
          </div>
        </div>
        <div className="sp d-flex-column gap-4 col-lg-8 col-md-12 pt-3">
          <div className="wrap"
            <div className="fs-4 fw-bold pb-2">Instructions</div>
            <div className="inst">{strInstructions}</div>
          </div>

          <div className="wrap py-2">
            <div className="fs-4 fw-bold pb-3">Recipes</div>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {ingredientsArray.map((meal, index) => {
                return (
                  <div className={`${index} rcp-div p-2 rounded`}>
                    <div className="">
                      {`${meal.measure} ${meal.ingredient}`}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="wrap py-3 justify-content-center align-content-center align-items-center">
              <div className="fs-4 fw-bold pb-2 ">Tags </div>{" "}
              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, index) => {
                  return (
                    <div className={`${index} rcp-div p-2 rounded`}>
                      <div className="">{tag}</div>
                    </div>
                  );
                })}
              </div>
              <div className="wrap py-3 justify-content-center align-content-center align-items-center">
                <div className="fs-4 fw-bold pb-2 ">Links </div>
                <div className="d-flex  py-1 flex-wrap gap-3">
                  <div className={` p-2 rounded sc`}>
                    <a href={strSource} style={{ textDecoration: "none" }}>
                      <div className="text-decoration-none">Source</div>
                    </a>
                  </div>
                  <div className={`p-2 rounded yt`}>
                    <a href={strYoutube} style={{ textDecoration: "none" }}>
                      <div className="text-decoration-none">Youtube</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reciepe;
