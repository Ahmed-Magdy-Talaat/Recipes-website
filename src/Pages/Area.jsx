import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Area() {
  const navigate = useNavigate();
  const [area, setArea] = useState([]);
  const getArea = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      if (!response.ok) {
        throw new Error("the network is not ok !");
      }
      const data = await response.json();
      setArea(data.meals);
    } catch (error) {
      console.log("Error in Fetching Process");
    }
  };
  useEffect(() => {
    getArea();
  }, []);
  return (
    <div className="contain-dishes container pt-2 ">
      <div className="row gy-4">
        {area.map((region, index) => {
          const { strArea } = region;
          return (
            <div
              className="contain-flg d-flex flex-column justify-content-center col-xl-3 col-lg-4 col-md-6 col-sm-12 h-17 text-center "
              onClick={() => navigate(`/Area/${strArea}`)}
            >
              <div className="img-contain py-1">
                <FaHome className="area p-1 " />
              </div>
              <div className="py-1 fs-3 fw-bold">{strArea}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Area;
