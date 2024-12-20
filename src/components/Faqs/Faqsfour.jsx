import React from "react";

 import { useState } from "react";

function Faqsfour() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
            <div className="containery">
        <div className={`accordionf ${activeIndex === 0 ? "border" : ""}`}>
          <div className="questiona" onClick={() => toggleAnswer(0)}>
            <h6 className="fw-bolder"> What differentiates Jungle Scout’s Competitive Intelligence tool from Jungle Scout Cobalt?</h6>
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
            Jungle Scout’s Competitive Intelligence tool is built for Amazon sellers and brand owners seeking targeted competitor insights and market analysis to benchmark their brand, grow market share, and dominate on Amazon. In contrast, Jungle Scout Cobalt offers a broader scope, catering to large brands, enterprises, agencies, global retailers, and organizations with high-volume data needs and custom infrastructure requirements to feed Amazon data. Jungle Scout Cobalt integrates with Vendor Central, provides customizable reporting, aggregates data at the brand level, supports cloud data consumption, and includes PPC management for optimized advertising campaigns.                </p>
          </div>
        </div>
      </div>
   
     
      
   
   
    </>
  );
}

export default Faqsfour;
