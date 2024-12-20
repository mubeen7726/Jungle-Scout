
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Card from "./Card";

function Lastcomponent() {
  const cart = [
    {
      icon: "/Competitive-Intelligence-AI-review-analysis-icon.svg",
      heading: "AI Review Analysis + Review Automation",
      paragraph:
        "Shift your strategy from reacting to market trends to predicting them in advance, drawing insights from data on market share and consumer demand.",
    },
    {
      icon: "/Competitive-Intelligence-Keyword-scout-icons.svg",
      heading: "Keyword Scout + Rank Tracker",
      paragraph:
        "Enhance ad efficiency and ROI by targeting high-converting keywords, optimize Amazon listings for better visibility, and stay competitive by monitoring keyword rankings against competitors.",
    },
    {
      icon: "/Competitive-Intelligence-Product-database-icons.svg",
      heading: "Product Database + Opportunity Finder",
      paragraph:
        "Identify and launch new products that align with your product strategy and have high demand and low competition to boost sales and grow your market share.",
    },
  ];
  return (
    <>
      <div
        className="containerfluid"
        style={{
          backgroundImage: "url('/download (3).png')",
          backgroundSize: "100%",
          minHeight: "139vh",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgb(254,242,231)",
        }}
      >
        <div
          className="container text-center d-none d-lg-block "
          style={{ marginTop: "11%" }}
        >
          <div
            className=""
            style={{
              backgroundImage: "url('/Section-7_simple-cta-cobalt.png')",
              backgroundSize: "100%",
              minHeight: "38vh",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
                        }}
          >
            <Image
              src={"/Jungle-Scout-Cobalt-Logo.svg"}
              width={200}
              height={100}
              alt="Error"
            ></Image>
            <h2 className="text-light ">
              Are you a large brand or retailer looking for market-level
              insights?
            </h2>
            <div>
              <span className="text-light ">
                Discover how Jungle Scout Cobalt helps global brands answer
                critical questions and make data-driven decisions.
              </span>
            </div>

            <button
              className="btn  btn-light my-4 px-5  text-center  py-3 fw-bolder"
              style={{ marginBottom: "10px",textAlign:"center" }}
            >
              Get a Demo
            </button>
          </div>
        </div>
        <div className="container d-lg-none  " style={{ marginTop: "11%" }}>
          <div
            className=" text-start px-4"
            style={{
              backgroundImage: "url('/Section-7_simple-cta-cobalt-mobile.png')",
              backgroundSize: "100%",
              minHeight: "38vh",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
            }}
          >
            <Image
              src={"/Jungle-Scout-Cobalt-Logo.svg"}
              width={200}
              height={100}
              alt="Error"
            ></Image>
            <h2 className="text-light ">
              Are you a large brand or retailer looking for market-level
              insights?
            </h2>
            <div>
              <span className="text-light ">
                Discover how Jungle Scout Cobalt helps global brands answer
                critical questions and make data-driven decisions.
              </span>
            </div>

            <button
              className="btn col-12 btn-light my-4 px-5 text-center  py-3 fw-bolder"
              style={{
                marginBottom: "10px",
                backgroundColor: "rgb(254,242,231)",
              }}
            >
              Get a Demo
            </button>
          </div>
        </div>

        <div className=" container  " style={{ justifyContent: "center" }}>
          <div className=" col-md-5  text-center ">
            <h2 className="fw-bolder mt-5">
              Discover Jungle Scout’s best-in-class ecommerce market
              intelligence tools
            </h2>

            <Link
              href={"/"}
              className="rounded-5 px-4 py-2  text-decoration-none"
              style={{
                border: "1px solid black",
                display: "inline-flex",
                alignItems: "center",
                marginTop: "2rem",
                marginBottom: "3rem",
                color: "black",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "blue";
                e.target.style.border = "1px solid blue";
                e.target.style.backgroundColor = " #e6e6ff";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "black";
                e.target.style.border = "1px solid black";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Get Started ➜
            </Link>
          </div>
        </div>

        <div className="container  ">
          <div className="row flex-wrap flex-column flex-md-row gap-3 flex-lg-nowrap align-items-center justify-content-center">
            {cart.map((item) => {
              return (
                <Card
                  key={item.heading}
                  icon={item.icon}
                  heading={item.heading}
                  paragraph={item.paragraph}
                />
              );
            })}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Lastcomponent;
