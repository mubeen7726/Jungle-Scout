import React from "react";

function Paragraph() {
  return (
    <>
      <div className="container col-12 mt-5  " style={{ marginTop: "10px" }}>
        <div className="row text-center">
          <span className=" h2 fw-normal mt-2">
            Know and grow your market share with Competitive Intelligence
          </span>
          <span style={{ fontSize: "12px", fontStyle: "italic" }}>
            Access Competitive Intelligence with the{" "}
            <span className="fw-bolder"> Brand Owner plan</span>
          </span>
          <div className=" d-flex justify-content-center align-items-center">
            <button
              className=" mt-4 mx-5 "
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bolder",

                height: "50px",
                width: "11rem",
                fontSize: "17px",
                transition: "background-color 0.3s ease", // Smooth transition for the hover effect
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "blue")} // Handle hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "black")} // Revert back to black when mouse leaves
            >
              Get Started
            </button>
          </div>
         <div style={{width:"100%",height:"2px", backgroundColor:"black", marginTop:"10%" }}></div>
        </div>
      </div>
    </>
  );
}

export default Paragraph;
