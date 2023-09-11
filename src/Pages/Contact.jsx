import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fname: "",
    email: "",
    age: "",
    pass: "",
    phone: "",
    rePass: "",
  });

  // Create a separate state to store errors for each input field
  const [errors, setErrors] = useState({
    fname: "",
    email: "",
    age: "",
    pass: "",
    phone: "",
    rePass: "",
  });

  // Define validation functions for each input
  const validateFirstName = () => {
    const rgxName = /^[a-zA-Z]{3,20}$/;
    if (!data.fname || !data.fname.trim() || !rgxName.test(data.fname)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fname: "First Name is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, fname: "" }));
    }
  };

  const validateEmail = () => {
    const rgxEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!data.email || !data.email.trim() || !rgxEmail.test(data.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validateAge = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    if (
      !data.age ||
      isNaN(Number(value)) ||
      Number(value) < 18 ||
      Number(value) > 70
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: "Age must be a valid number between 18 and 70.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, age: "" }));
    }
  };

  const validatePassword = () => {
    if (!data.pass || !data.pass.trim() || data.pass.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pass: "Password must be at least 8 characters and contain a symbol.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, pass: "" }));
    }
  };

  const validatePhone = (e) => {
    const rgxPhone = /^01[0125][0-9]{8}$/gm;
    const { value } = e.target;
    if (!value || !value.trim() || !rgxPhone.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Invalid phone number.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };
  const validateRePass = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "rePass" && value === data.pass) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        rePass: "",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        rePass: "Passwords do not match",
      }));
    }
  };

  const handleInputChange = (e) => {
    // Validate the input
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    switch (name) {
      case "fname":
        validateFirstName();
        break;
      case "email":
        validateEmail();
        break;
      case "age":
        validateAge(e);
        break;
      case "pass":
        validatePassword();
        break;
      case "phone":
        validatePhone(e);
        break;
      case "rePass":
        validateRePass(e);
        break;
      default:
        break;
    }
  };

  // Check if the form is valid
  const isValid = () => {
    return (
      !errors.fname &&
      !errors.email &&
      !errors.age &&
      !errors.pass &&
      !errors.phone &&
      data.pass === data.rePass
    );
  };

  return (
    <div className=" d-flex align-content-start align-items-start ">
      <div className="container  d-flex flex-column contact-us">
        <div className="contact fs-2 mb-3 mt-3">Contact Us</div>
        <form className="align-content-start align-items-start w-100 px-1">
          <div className="container-fluid col gy-3 w-100 ">
            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div className="w-100">
                <div className="">
                  <label className="" htmlFor="firstName">
                    FirstName :
                  </label>
                  <input
                    type="text"
                    id="content-input"
                    name="fname"
                    className="col-lg-8 col-md-12"
                    value={data.fname}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.fname && <div className="error">{errors.fname}</div>}
              </div>
            </div>
            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div className="w-100">
                <div className="w-100">
                  <label className="" htmlFor="Email">
                    Email :
                  </label>
                  <input
                    className="col-lg-8 col-md-12"
                    type="text"
                    id="content-input"
                    value={data.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>
            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div className="w-100">
                <div>
                  <label className="" htmlFor="phone">
                    Phone :
                  </label>
                  <input
                    className="col-lg-8 col-md-12"
                    type="text"
                    id="content-input"
                    value={data.phone}
                    name="phone"
                    onChange={handleInputChange}
                  />
                </div>
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
            </div>

            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div className="w-100">
                <div>
                  <label className="" htmlFor="Age">
                    Age :
                  </label>
                  <input
                    className="col-lg-8 col-md-12"
                    type="number"
                    id="content-input"
                    value={data.age}
                    name="age"
                    onChange={handleInputChange}
                  />
                </div>
                {errors.age && <div className="error">{errors.age}</div>}
              </div>
            </div>
            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div className="w-100">
                <div>
                  <label className="" htmlFor="pass">
                    Password :
                  </label>
                  <input
                    className="col-lg-8 col-md-12"
                    type="password"
                    id="content-input"
                    name="pass"
                    value={data.pass}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.pass && <div className="error">{errors.pass}</div>}
              </div>
            </div>
            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div className="w-100">
                <div>
                  <label className="" htmlFor="repass">
                    Repassword :
                  </label>
                  <input
                    className="col-lg-8 col-md-12"
                    type="password"
                    id="content-input"
                    name="rePass"
                    onChange={handleInputChange}
                    value={data.rePass}
                  />
                </div>
                {errors.rePass && <div className="error">{errors.rePass}</div>}
              </div>
            </div>
          </div>
        </form>
        <div className="d-flex flex-column w-100 text-center align-items-center">
          <button
            className="sub text-center rounded-pill px-4 py-1 mt-4 mb-3"
            disabled={!isValid()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
