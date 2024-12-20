import React from "react";

 import { useState } from "react";

function Faqsfive() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
            <div className="containery">
        <div className={`accordionf ${activeIndex === 0 ? "border" : ""}`}>
          <div className="questiona" onClick={() => toggleAnswer(0)}>
            <h6 className="fw-bolder">How far back can I access competitive intelligence data with this tool?</h6>
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
            The tool allows you to access up to 12 months of historical competitive intelligence data, providing key features such as the ability to analyze Amazon competitor listings and reviews, track product performance, and monitor pricing strategies. With access to millions of data points, it also serves as a powerful sales enablement resource, helping you navigate the competitive landscape by tracking Amazon seller market share. Additionally, it supports Amazon seller performance analysis, enabling sales teams, sellers, and brand owners to make data-driven decisions that drive revenue growth.  </p>
          </div>
        </div>
      </div>
   
     
      
   
   
    </>
  );
}

export default Faqsfive;
