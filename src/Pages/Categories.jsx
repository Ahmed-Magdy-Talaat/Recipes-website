import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../Components/Transition";

function Categories() {
  const [category, setCategory] = useState([]);
  const [clip, setClip] = useState(false);
  const navigate = useNavigate();
  const getCategories = async () => {
    try {
      setClip(true);
      const categ = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!categ.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await categ.json();
      setCategory(data.categories); // Update to set the array of categories
      setClip(false);
    } catch (error) {
      console.log("Error in fetching Categories");
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      {clip && <Transition />}
      <div className="contain-dishes container pt-2 ">
        <div className="row gy-4">
          {category.map((categ, index) => {
            const { strCategory, strCategoryThumb, strCategoryDescription } =
              categ;
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-1"
                key={index}
                onClick={() => navigate(`/Categories/${strCategory}`)}
              >
                <div className="dish-contain  position-relative">
                  <div className="img-contain">
                    <img
                      className="w-100"
                      src={strCategoryThumb}
                      alt={`categ${index}`}
                    />
                  </div>
                  <div className="position-absolute bottom-0 left-0 right-0 align-content-center align-items-center justify-content-center w-100 layer dd">
                    <div className="fs-6 fw-bold text-center">
                      {strCategory}
                    </div>
                    <div className="fw-light">{strCategoryDescription}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
