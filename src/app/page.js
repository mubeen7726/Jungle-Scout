"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Content from "@/components/Content";
import Paragraph from "@/components/Paragraph";
import LastSlider from "@/components/LastSlider";
import Lastcomponent from "@/components/Lastcomponent";
import Footer from "@/components/footer/Footer";
import LastContainer from "@/components/last-container/Last-container";
import App from "@/components/Slider/App";
import Header from "@/components/header/header";

// swiper

function Page() {
  const contents = [
    {
      icon: "/first.svg",
      caption: "CATEGORY INSIGHTS",
      heading: "Gauge broader Amazon category and subcategory trends",
      content:
        "Understand market dynamics and identify growth opportunities within specific categories and subcategories to make confident, profitable business decisions.",
    },
    {
      icon: "/second.svg",
      caption: "SHARE OF VOICE",
      heading: "Analyze share of voice for your products",
      content:
        " Monitor share of voice metrics related to specific keywords to boost your product’s visibility and sales in the marketplace.",
    },
    {
      icon: "/three.svg",
      caption: "SEASONAL SHIFTS",
      heading: "Understand seasonal variations and factors",
      content:
        "Effectively distinguish between seasonal sales fluctuations and product-specific issues to streamline planning and enhance inventory management.",
    },
    {
      icon: "/fourth.svg",
      caption: "PRICING TRENDS",
      heading: "Boost revenue with strategic pricing strategies",
      content:
        "Elevate your market position and maximize profitability by monitoring competitors’ pricing strategies – gain a competitive edge and capture more revenue.",
    },
  ];

  return (
    <>
    {/* <div className="container  d-flex flex-column "> */}
    <Header/>
      <div id="text"
        className="container-fluid mh-100   "
        style={{
          backgroundImage:
            " url('/Orange-Angle.png'), url('/js_gradient-background-creamsicle-to-purple.png')",
          backgroundSize: "100% 50%, cover ",

          backgroundPosition: "top right, top left",
          height: "100%",

          backgroundRepeat: "no-repeat",
marginTop:"26px",
          paddingTop: "1rem",
          justifyItems:"center"
        }}
      >
       
        <div className="row d-block col-xxl-7    text-center text-md-start d-md-flex">
          <div
            className="col-12 col-md-6 order-1"
            style={{ paddingLeft: "3rem" }}
          >
            <Image
              src={"/Competitive-Intelligence-Hero-Eyebrow-1x-1.svg"}
              width={250}
              height={100}
              alt="Error"
            ></Image>{" "}
            <h1 className=" fw-semibold fw-bolder">
              <span className="fw-normal fw-light">
                Accelerate revenue growth with Jungle Scout’s
              </span>
              Competitive Intelligence
            </h1>
            <p>
              Dominate your market with in-depth competitive data and market
              insights for Amazon sellers and brand owners.
            </p>
          </div>
         
          <div
            className="col-12 col-md-6 px-12rem order-2"
            style={{ paddingTop: "4rem" }}
          >
            <video
              style={{}}
              className="col-12 px-5"
              src="/Amazon Competitive Intelligence Tool - Jungle Scout_2.ts"
              autoPlay
              controls
              poster="/vodeoth.png"
            ></video>
          </div>
         
          <div className="col order-3 " style={{ marginBottom: "" }}>
            <button
              className="col-11 col-md-2 py-2 mx-4 border rounded-1 "
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bolder",

                height: "50px",
                fontSize: "17px",
                transition: "background-color 0.3s ease", // Smooth transition for the hover effect
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "blue")} // Handle hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "black")} // Revert back to black when mouse leaves
            >
              Get Started
            </button>
            <button
              className="btn my-2 fw-bolder text-center  col-md-2 border rounded-1 border-black btn-light col-11 "
              style={{
                backgroundColor: "transparent",

                height: "52px",
                fontSize: "17px",
                border: "1px solid #000",
                color: "#000",
                marginBottom: "4px",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Take the Tour
            </button>
            <p
              className="mx-4 my-3 fst-italic text-black-50 "
              style={{ fontSize: "15px" }}
            >
              Access Competitive Intelligence with the
              <span
                className="fw-bolder text-black  "
                style={{ fontWeight: "600px", cursor: "pointer" }}
              >
                Brand Owner plan
              </span>
            </p>
            <p
              className="text-center "
              style={{ fontSize: "13px", color: "black", fontWeight: "400" }}
            >
              <span className="d-none d-lg-inline">Our customers say </span>{" "}
              <span
                className="px-3 fw-normal d-none d-lg-inline"
                style={{ fontSize: "18px" }}
              >
                Excellent
              </span>{" "}
              <Image
                src={"/download.png"}
                width={130}
                height={30}
                alt="Error"
              ></Image>
              <span
                className=" d-none d-lg-inline"
                style={{ fontSize: "15px", marginLeft: "10px" }}
              >
                4.7 out of 5 based on 3,936 reviews
              </span>
              <Link className="text-decoration-none text-black" href={"/"}>
                <Image
                  className="mb-2"
                  style={{ marginLeft: "10px" }}
                  src={"/download (1).png"}
                  width={20}
                  height={20}
                  alt="Error"
                ></Image>
                Truspliot
              </Link>
            </p>
          </div>
        </div>
        {/* cards start */}
        <div className="row  col-xxl-7  d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 ">
          <div
            className="col-10 col-md-3 border text-center bg-light rounded-4 shadow py-3 "
            style={{}}
          >
            <Image
              src={"/Competitive-Intelligence-icon-benchmark-1.webp"}
              width={100}
              height={100}
              alt="Error"
              className="mt-4"
            ></Image>
            <h3 className=" h4-md mb-0 mt-4 mt-md-6 fw-bolder">
              Benchmark your brand
            </h3>
            <p className="  mt-3 mt-md-6 mb-0" style={{ fontWeight: "13px" }}>
              Determine where you stand in the market and where you can improve.
            </p>

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
              Learn More ➜
            </Link>
          </div>
          {/* Second cart */}
          <div
            className=" col-10 col-md-3  border text-center bg-light rounded-4 shadow py-3 "
            style={{}}
          >
            <Image
              src={"/Competitive-Intelligence-icon-market-share-1.webp"}
              width={100}
              height={100}
              alt="Error"
              className="mt-4"
            ></Image>
            <h3 className=" h4-md mb-0 mt-4 mt-md-6 fw-bolder">
              Grow your market share
            </h3>
            <p className="  mt-3 mt-md-6 mb-0" style={{ fontWeight: "13px" }}>
              Identify if you are gaining or losing market share and uncover
              why.
            </p>

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
              Learn More ➜
            </Link>
          </div>
          {/* Thrid cart */}
          <div
            className="col-10 col-md-3  border text-center bg-light rounded-4 shadow py-3 "
            style={{}}
          >
            <Image
              src={"/Competitive-Intelligence-icon-market-share-1.webp"}
              width={100}
              height={100}
              alt="Error"
              className="mt-4"
            ></Image>
            <h3 className=" h4-md mb-0 mt-4 mt-md-6 fw-bolder">
              Dominate your market
            </h3>
            <p className="  mt-3 mt-md-6 mb-0" style={{ fontWeight: "13px" }}>
              Use the best-in-class data to refine pricing, advertising, and
              more.
            </p>

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
              Learn More ➜
            </Link>
          </div>
        </div>
      </div>

      <div
        className="d-none d-lg-block  d-xxl-none"
      
        style={{
          backgroundImage: "url('/Screenshot 2024-12-09 220758.png')",
          backgroundSize: "contain",
          height: "200px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
  className="d-none d-xxl-block" // Show only on XXL screens
  style={{
    backgroundImage: "url('/extra large background.png')",
    backgroundSize: "contain",
    height: "200px",
    backgroundRepeat: "no-repeat",
  }}
></div>
      {/* cards kay bad ka paragraph */}
      <section
        className="container-fluid mb-5 mt-5 "
        style={{ marginBottom: "100px" }}
      >
        <div className="container">
          <div className="row text-center justify-content-center mb-5">
            <div className="col-12 w-75 d-block  px-md-5 " style={{}}>
              <span className=" h2 fw-bolder">
                Reveal the strategies{" "}
                <span className="fw-normal font" style={{}}>
                  behind the success of top Amazon sellers
                </span>
              </span>
              <span className="d-flex mt-4">
                Jungle Scout’s Competitive Intelligence tool is the only way for
                Amazon brand owners to boost revenue, benchmark their brand,
                uncover how competitors are capturing market share, and fuel the
                strategy to win it back.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* First container */}
      <div className="container-fluid ">
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row "
            >
              <div className="col order-1 order-lg-2">
                <Image
                  src={"/Competitive-Intelligence-Competitive-Benchmark.png"}
                  alt="Error"
                  width={450}
                  height={300}
                  className="w-100 h-100 mx-3"
                ></Image>
              </div>
              <div className=" order-2 order-lg-1 col-12 col-lg-4 text-start mt-5 ">
                <div
                  className="fw-bolder text-primary mb-4 "
                  style={{ fontSize: "12px" }}
                >
                  COMPETITIVE BENCHMARKING
                </div>
                <span className="fw-bolder text-black fs-5 ">
                  Benchmark your position against key players in the market
                </span>
                <p className="mt-4">
                  Gain instant insights into key competitors and industry
                  leaders within your market niche. Easily view how your
                  competition stacks up by revenue, units sold, average price,
                  star rating, and total reviews.
                </p>
                <Link
                  href={"/"}
                  className="rounded-5 px-4 py-1  text-decoration-none"
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "1rem",
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
          </div>
        </div>
        {/* Second container */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col">
                <Image
                  src={"/Rank-tracker-1.webp"}
                  alt="Error"
                  width={450}
                  height={300}
                  className="w-100 h-100"
                ></Image>
              </div>
              <div className=" order-2 order-lg-1 col-12 col-lg-4 text-start mt-5 ">
                <div
                  className="fw-bolder text-primary mb-4 "
                  style={{ fontSize: "12px" }}
                >
                  REVIEW & LISTING ANALYSIS
                </div>
                <span className="fw-bolder text-black fs-5 ">
                  Increase traffic & sales with optimized listings based on
                  customer reviews{" "}
                </span>
                <p className="mt-4">
                  Know what your customers want with AI-powered analysis of
                  competitor reviews. Analyze Amazon competitor listings
                  side-by-side with your own to optimize for customer
                  preferences – boosting sales conversions and profitability.
                </p>
                <Link
                  href={"/"}
                  className="rounded-5 px-4 py-1  text-decoration-none"
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "1rem",
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
          </div>
        </div>
        {/* third container */}
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row">
              <div className="col order-1 order-lg-2">
                <Image
                  src={"/Market-share.png"}
                  alt="Error"
                  width={450}
                  height={300}
                  className="w-100 h-100 mx-3"
                ></Image>
              </div>
              <div className=" order-2 order-lg-1 col-12 col-lg-4 text-start mt-5 ">
                <div
                  className="fw-bolder text-primary mb-4 "
                  style={{ fontSize: "12px" }}
                >
                  MARKET ANALYSIS
                </div>
                <span className="fw-bolder text-black fs-5 ">
                  Gain insights into your competitors’ market share
                </span>
                <p className="mt-4">
                  Compare data points to uncover correlations and strategic
                  opportunities. Understand where competitors are winning market
                  share – so you can take steps to win it back. Include up to
                  200 ASINs and tailor your market segment to precisely target
                  top competitors.
                </p>
                <Link
                  href={"/"}
                  className="rounded-5 px-4 py-1  text-decoration-none"
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "1rem",
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
          </div>
        </div>
        
<div className="container-fluid">
  <App/>
</div>
        {/* fourth container */}
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row">
              <div className="col order-1 order-lg-1">
                <Image
                  src={"/Competitive-Intelligence-Product-Innovation.png"}
                  alt="Error"
                  width={450}
                  height={300}
                  className="w-100 h-100 mx-3"
                ></Image>
              </div>
              <div className="  order-2 order-lg-2 col-12 col-lg-4 text-start mt-5 ">
                <div
                  className="fw-bolder text-primary mb-4 "
                  style={{ fontSize: "12px" }}
                >
                  PRODUCT INNOVATION
                </div>
                <span className="fw-bolder text-black fs-5 ">
                  Launch new products successfully and enhance existing ones
                </span>
                <p className="mt-4">
                  Examine all products in your segment and understand how each
                  compares against others. Optimize pricing strategies, enhance
                  Amazon ad campaigns and promotions, boost product listings for
                  better conversion, and identify the best strategies for
                  expanding into new markets.
                </p>
                <Link
                  href={"/"}
                  className="rounded-5 px-4 py-1  text-decoration-none"
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "1rem",
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
          </div>
        </div>
        {/* five container */}
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row">
              <div className="col order-1 order-lg-2">
                <Image
                  src={"/Competitive-Intelligence-Keyword-Research.png"}
                  alt="Error"
                  width={450}
                  height={300}
                  className="w-100 h-100 mx-3"
                ></Image>
              </div>
              <div className=" order-2 order-lg-1 col-12 col-lg-4 text-start mt-5 ">
                <div
                  className="fw-bolder text-primary mb-4 "
                  style={{ fontSize: "12px" }}
                >
                  KEYWORD RESEARCH
                </div>
                <span className="fw-bolder text-black fs-5 ">
                  Discover your competitors’ revenue-driving keywords
                </span>
                <p className="mt-4">
                  Find revenue-driving keywords from your Amazon competitors
                  with product ranking insights, including a breakdown of
                  organic vs. sponsored performance and the unique ability to
                  see which products own Amazon badges. Leverage these powerful
                  insights in your listings and ad campaigns to spot market
                  opportunities, boost sales, and enhance your rankings.
                </p>
                <Link
                  href={"/"}
                  className="rounded-5 px-4 py-1  text-decoration-none"
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "1rem",
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
          </div>
        </div>
        {/* six container */}
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row">
              <div className="col order-1 order-lg-1">
                <Image
                  src={"/campaign-tracking.png"}
                  alt="Error"
                  width={450}
                  height={300}
                  className="w-100 h-100 mx-3"
                ></Image>
              </div>
              <div className=" order-2 order-lg-2 col-12 col-lg-4 text-start mt-5 mx-lg-5 ">
                <div
                  className="fw-bolder text-primary mb-4 "
                  style={{ fontSize: "12px" }}
                >
                  POSITION TRACKING
                </div>
                <span className="fw-bolder text-black fs-5 ">
                  Track your rank against competitors for top keywords
                </span>
                <p className="mt-4">
                  Get a comprehensive picture of how each products ranks by
                  keyword for both organic and sponsored sources. View multiple
                  keywords related to the products in each segment side-by-side.
                </p>
                <Link
                  href={"/"}
                  className="rounded-5 px-4 py-1  text-decoration-none"
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "1rem",
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
          </div>
        </div>
      </div>
      {/* last four p plus image */}

      <div className="container-fluid ">
        <div className="container d-md-flex ">
          <div className="row">
            {contents.map((content) => {
              return (
                <Content
                  key={content.heading}
                  icon={content.icon}
                  caption={content.caption}
                  heading={content.heading}
                  content={content.content}
                />
              );
            })}
          </div>
          <div className="col d-none d-lg-block">
            <Image
              src={"/Competitive-Intelligence-Features-image-desktop.webp"}
              width={350}
              height={550}
              alt="Error"
            ></Image>
          </div>
        </div>
      </div>

      <Paragraph />
      <LastSlider />
      <Lastcomponent />

      <LastContainer />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default Page;
