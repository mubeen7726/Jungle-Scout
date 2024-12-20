import React from "react";

 import { useState } from "react";

function Faqssix() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
            <div className="containery">
        <div className={`accordionf ${activeIndex === 0 ? "border" : ""}`}>
          <div className="questiona" onClick={() => toggleAnswer(0)}>
            <h6 className="fw-bolder">Which categories are currently supported by Jungle Scout’s Competitive Intelligence tool?</h6>
            <div
              className={`circle-plus ${
                activeIndex === 0 ? "opened" : "closed"
              }`}
            >
              <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>
          </div>
          <div
            className={`answer ${activeIndex === 0 ? "active" : ""}`}
            style={{ maxHeight: activeIndex === 0 ? "1000px" : "0" }}
          >
            <p>
            The tool currently supports the following Amazon categories:</p>    
                 <ul>
                    <li>Arts, Crafts & Sewing</li>
                    <li>Automotive</li>
                    <li>Baby</li>
                    <li>Beauty & Personal Care</li>
                    <li>Health & Household</li>
                    <li>Home & Kitchen</li>
                    <li>Kitchen & Dining</li>
                    <li>Office Products</li>
                    <li>Patio, Lawn & Garden</li>
                    <li>Pet Supplies</li>
                    <li>Sports & Outdoors</li>
                    <li>Tools & Home Improvement</li>
                    <li>Toys & Games</li>
                 </ul>
                  </div>
        </div>
      </div>
   
     
      
   
   
    </>
  );
}

export default Faqssix;
