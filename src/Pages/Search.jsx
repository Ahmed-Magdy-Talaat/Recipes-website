import React, { useState } from "react";
import Meals from "../Components/Meals";

function Search({ dishes }) {
  const [meals, setMeals] = useState([]);
  const [show, setShow] = useState(false);

  const handleSearch = (searchWord) => {
    const filteredMeals = dishes.filter((meal) => {
      const { strMeal } = meal;
      return strMeal.toLowerCase().includes(searchWord.toLowerCase());
    });
    setShow(searchWord.length > 0);
    setMeals(filteredMeals);
  };

  const handleSearchFl = (searchLetter) => {
    if (searchLetter.length === 1) {
      const filteredMeals = dishes.filter((meal) => {
        const { strMeal } = meal;
        return strMeal.charAt(0).toLowerCase() === searchLetter.toLowerCase();
      });
      setMeals(filteredMeals);
      setShow(searchLetter.length > 0);
    }
  };

  return (
    <div className="container w-100 d-flex flex-column search pb-5">
      <div className="fs-4 text-center mb-1">Search and Filter</div>
      <form className="px-10 w-100">
        <div className="row col-sm">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
            <div className="mb-2 ">
              <input
                type="text"
                id="searchName"
                name="searchName"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Enter Search Name"
                className="rounded w-100"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12  col-sm-12 mt-3 ">
            <div className="mb-2">
              <input
                type="text"
                id="searchLetter"
                name="searchLetter"
                placeholder="Enter First Letter"
                className="rounded w-100 "
                maxLength="1"
                onChange={(e) => handleSearchFl(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      {show && <Meals dishes={meals} />}
    </div>
  );
}

export default Search;
