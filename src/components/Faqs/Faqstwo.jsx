import React from "react";

 import { useState } from "react";

function Faqstwo() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
            <div className="containery">
        <div className={`accordionf ${activeIndex === 0 ? "border" : ""}`}>
          <div className="questiona" onClick={() => toggleAnswer(0)}>
            <h6 className="fw-bolder"> Why should Amazon sellers and brand owners use a competitive intelligence tool?</h6>
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
            A competitive intelligence tool enables ecommerce businesses, Amazon sellers and brand owners to boost revenue and dominate the market. With Jungle Scout’s Competitive Intelligence tool you can analyze competitor listings on Amazon to pinpoint areas for improvement, track your market share effectively, monitor competitor prices on Amazon, and track their product performance to stay ahead. Our industry-leading competitive data empowers you to optimize your pricing, advertising, and marketing strategies, providing the insights needed to drive sales growth.                </p>
          </div>
        </div>
      </div>
   
     
      
   
   
    </>
  );
}

export default Faqstwo;
