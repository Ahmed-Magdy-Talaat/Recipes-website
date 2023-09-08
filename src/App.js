import { useEffect, useState, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Meals from "./Components/Meals";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Area from "./Pages/Area";
import Ingredients from "./Pages/Ingredients";
import Categories from "./Pages/Categories";
import Navbar from "./Components/Navbar";
import Recipe from "./Pages/Recipe";
import CategoryMenu from "./Pages/CategoryMenu";
import IngredientsMenu from "./Pages/IngredientsMenu";
import AreaMenu from "./Pages/AreaMenu";
export const modeContext = createContext(null);

function App() {
  const [meals, setMeals] = useState([]);
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((cur) => (cur === "light" ? "dark" : "light"));
  };

  const getMeals = async (fil) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${fil}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log("Error in Fetching process");
    }
  };
  useEffect(() => {
    getMeals("");
  }, []);

  return (
    <modeContext.Provider value={{ mode, toggleMode }}>
      <div className="App" id={mode === "dark" ? "dark" : "light"}>
        <Navbar />
        <div>
          <Sidebar />
        </div>
        <div
          style={{ marginLeft: "4em", marginTop: "5em", marginBottom: "3em" }}
        >
          <Routes>
            <Route path="/" element={<Meals dishes={meals} />} />
            <Route path="/Search" element={<Search dishes={meals} />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Area" element={<Area />} />
            <Route path="/Ingredients" element={<Ingredients />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/dish/:dishName" element={<Recipe meals={meals} />} />
            <Route
              path="/Categories/:category"
              element={<CategoryMenu dishes={meals} />}
            />
            <Route
              path="/Area/:country"
              element={<AreaMenu dishes={meals} />}
            />
            <Route
              path="/Ingredients/:ing"
              element={<IngredientsMenu dishes={meals} />}
            />
          </Routes>
        </div>
      </div>
    </modeContext.Provider>
  );
}

export default App;
