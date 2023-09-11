import React from "react";
import { ClipLoader } from "react-spinners";

function Transition() {
  return (
    <div className="position-absolute top-0 bottom-0 start-0 end-0 layer-2 d-flex flex-column align-content-center align-items-center justify-content-center ">
      <ClipLoader color="#36d7b7" size={100} />
    </div>
  );
}

export default Transition;
