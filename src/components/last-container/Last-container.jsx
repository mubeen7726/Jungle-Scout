import React from "react";

import NewFaqs from "../Faqs/NewFaqs";
import {  } from "./../../../src/app/globals.css";
function Lastcontainer() {
  return (
    <>
     <NewFaqs/>
      <div
        className="container-fluid pt-5 "
        style={{ backgroundColor: "rgb(254,242,231)", justifyItems: "center" }}
      >
        <div
          className="col-9 col-xxl-6 container rounded-3 d-wrap d-md-flex d-block  align-items-center justify-content-md-around "
          style={{
            background:
              "linear-gradient(94.56deg, #F57706 46.31%, #FAC800 98.31%)",
          }}
        >
          <span>
            <h2 className="text-light fw-normal d-inline d-md-block mt-3 ">
              Dominate your market with in-depth
            </h2>
            <h2 className="px-1 mr-1 d-inline text-light fw-bolder d-md-block">
              Competitive Intelligence
            </h2>
            <span className="text-light my-3 d-block">
              Get the <span className="fw-bolder "> Brand Owner plan</span> to
              access Competitive Intelligence
            </span>
          </span>
          <span className=" col-12 col-md-3  d-flex align-items-md-center ">
            <button className="my-2 col-12 py-2 d-block align-center text-center d-md-inline btn btn-dark rounded-1 fw-bolder hover ; ">
              Get Started
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Lastcontainer;
