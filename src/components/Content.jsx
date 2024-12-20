
import Image from "next/image";
import React from "react";

const Content = ({ icon, caption, heading, content }) => {
  
  return (
    <div className="col-md-6 order-lg-1">
      <Image
        src={icon}
        width={50}
        height={50}
        alt="Error"
        style={{ marginTop: "10px" }}
      ></Image>
      <div
        className="fw-bolder text-primary mb-4 "
        style={{ fontSize: "12px" }}
      >
        {caption}
      </div>
      <span className="fw-bolder text-black fs-5 ">{heading}</span>
      <p className="mt-4">{content}</p>
      
    </div>

  
  );
};

export default Content;
