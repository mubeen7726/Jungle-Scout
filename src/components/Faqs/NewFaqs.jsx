import React from "react";

import "./Faqs.css";
import Faqs from "./Faqsone";
import Faqstwo from "./Faqstwo";
import FaqsThree from "./faqsthree";
import Faqsfour from "./Faqsfour";
import Faqsfive from "./Faqsfive";
import Faqssix from "./Faqssix";


function NewFaqs() {
 

  return (
    <>
    <div className="justify-content-center pt-3    " style={{backgroundColor:"rgb(254, 242, 231)",fontFamily:"Montserrat,sans-serif", justifyItems:"center"}}>

   
    <div className="justify-content-center col-sm-10  d-flex  flex-column  " id="faqs-large"  style={{backgroundColor:"rgb(254, 242, 231)",fontFamily:"Montserrat,sans-serif"}}><h1 className="fw-bolder text-center" >FAQS</h1>
    
 <Faqs/>
 <Faqstwo/>
 <FaqsThree/>
 <Faqsfour/>
 <Faqsfive/>
 <Faqssix/>
 </div>
 </div>
    </>
  );
}

export default NewFaqs;
