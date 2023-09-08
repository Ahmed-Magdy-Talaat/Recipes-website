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

  const validatePhone = () => {
    const rgxPhone = /^01[0125][0-9]{8}$/gm;
    if (!data.phone || !data.phone.trim() || !rgxPhone.test(data.phone)) {
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

    // Use the 'value' parameter directly for comparison
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
        validatePhone();
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
    <div className="w-75 position-absolute top-0 bottom-0 cont d-flex align-content-center align-items-center ">
      <div className="container w-75 d-flex flex-column contact-us">
        <div className="contact fs-2 text-center mb-3 mt-3">Contact Us</div>
        <form className="align-content-center align-items-center justify-content center px-5">
          <div className="col gy-3 ">
            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div>
                <div>
                  <label className="" htmlFor="firstName">
                    FirstName :
                  </label>
                  <input
                    type="text"
                    id="content-input"
                    name="fname"
                    value={data.fname}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.fname && <div className="error">{errors.fname}</div>}
              </div>
            </div>

            <div className=" col-lg-12 d-flex flex-row gap-2 mt-3">
              <div>
                <div>
                  <label className="" htmlFor="Email">
                    Email :
                  </label>
                  <input
                    className=""
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
              <div>
                <div>
                  <label className="" htmlFor="phone">
                    Phone :
                  </label>
                  <input
                    className=""
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
              <div>
                <div>
                  <label className="" htmlFor="Age">
                    Age :
                  </label>
                  <input
                    className=""
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
              <div>
                <div>
                  <label className="" htmlFor="pass">
                    Password :
                  </label>
                  <input
                    className=""
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
              <div>
                <div>
                  <label className="" htmlFor="repass">
                    Repassword :
                  </label>
                  <input
                    className=""
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
