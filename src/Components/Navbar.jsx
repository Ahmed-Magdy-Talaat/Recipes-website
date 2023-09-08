import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/food-logo.ico";
import { modeContext } from "../App";
import { ReactComponent as Sun } from "../images/Sun.svg";
import { ReactComponent as Moon } from "../images/Moon.svg";
function Navbar() {
  const { mode, toggleMode } = useContext(modeContext);
  const navigate = useNavigate();
  return (
    <nav className="shadow  navbar position-fixed mb-5 ">
      <div className=" d-flex flex-row res justify-content-between ">
        <div
          className="d-flex flex-row gap-3 py-1 tll"
          onClick={() => navigate("/")}
        >
          <div className="img-div">
            <img src={logo} alt="chef"></img>
          </div>
          <div className="fw-bold">Recipes World</div>
        </div>

        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onClick={toggleMode}
          />
          <label className="dark_mode_label" htmlFor="darkmode-toggle">
            <Sun />
            <Moon />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
