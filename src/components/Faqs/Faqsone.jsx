import React from "react";

 import { useState } from "react";

function Faqs() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
            <div className="containery" >
        <div  className={`accordionf ${activeIndex === 0 ? "border" : ""}`}>
          <div className="questiona" onClick={() => toggleAnswer(0)}>
            
            <h6 className="fw-bolder"> What are competitive intelligence tools for Amazon?</h6>
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
            Competitive intelligence tools for Amazon are software solutions designed to provide sellers and brand owners with detailed insights into their competitive landscape market dynamics on the Amazon platform. These tools gather and analyze data such as competitor product listings, marketing strategies, pricing, sales performance, keyword rankings, customer reviews, and overall market trends. By leveraging this information, Amazon sellers and brand owners can make informed decisions to optimize their own product listings, pricing strategies, PPC campaigns, and overall business strategies to gain a competitive edge and improve performance on Amazon.              </p>
          </div>
        </div>
      </div>
   
     
      
   
   
    </>
  );
}

export default Faqs;
