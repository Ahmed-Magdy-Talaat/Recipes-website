import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import { PiHamburgerDuotone } from "react-icons/pi";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <div className={`sidebar-container ${sidebarOpen ? "" : "close"}`}>
        <div className={`sidebar-div shadow  rounded`}>
          <div className="content align-content-center  w-100 d-flex flex-column gap-3 m-0">
            <div onClick={toggle} style={{ padding: "1em" }}>
              {sidebarOpen ? (
                <AiOutlineClose />
              ) : (
                <GiHamburgerMenu className="icon" />
              )}
            </div>
            <div>
              <Link to="/Search" className="ele py-3  cursor-pointer">
                <BsSearch className="icon" />
                <p style={{ display: sidebarOpen ? "block" : "none" }}>
                  Search
                </p>
              </Link>
            </div>
            <div>
              <Link to="/Categories" className="ele py-3 cursor-pointer">
                <BiSolidCategory className="icon" />
                <p style={{ display: sidebarOpen ? "block" : "none" }}>
                  Categories
                </p>
              </Link>
            </div>
            <Link to="/Area" className="ele py-3 cursor-pointer">
              <ImEarth className="icon" />
              <p style={{ display: sidebarOpen ? "block" : "none" }}>Area</p>
            </Link>
            <Link to="/Ingredients" className="ele py-3 cursor-pointer">
              <PiHamburgerDuotone className="icon" />
              <p style={{ display: sidebarOpen ? "block" : "none" }}>
                Ingredients
              </p>
            </Link>
            <Link to="/Contact" className="ele py-3 cursor-pointer ">
              <IoIosContact className="icon" />
              <p style={{ display: sidebarOpen ? "block" : "none" }}>
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${sidebarOpen ? "out" : ""}`}></div>
    </>
  );
}

export default Sidebar;
