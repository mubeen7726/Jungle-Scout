
import Image from "next/image";
import React from "react";

function Card({ icon, heading, paragraph }) {
  
  return (
    <>
      
          <div className="col-10 col-lg-4 bg-body gap-3 align-items-center " style={{height:"370px"}}>
            <div className="text-start  rounded px-4 ">
              <Image
                className="my-3"
                src={icon}
                width={100}
                height={100}
                alt="Error"
              ></Image>
              <h3 className="fw-bolder">
                {heading}
              </h3>
              <span >
               {paragraph}
              </span>
            </div>
          </div>
      
    </>
  );
}

export default Card;
