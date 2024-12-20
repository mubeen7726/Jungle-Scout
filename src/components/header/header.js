// import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";

// import { Link } from 'react-router-dom';
import Link from 'next/link';
import './header.css';
import Recource from './RecourcesPack/Recource.jsx'
import Functions from './Functions/Functions';
export default function Headers() {
  return (
    <>
   
     {/* Web SITES */}
   
      <div className=' fixed-top'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ maxWidth: '100%' }}>
          <div className="container">
            <Link className="navbar-brand"href={"./"}>
             
              <img
                src="https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/logo-js-full_4ffc995cb339488dc88e.svg"
                alt="Jungle Scout"
                style={{ width: "75%", height: "auto" }}
              />
            </Link>


            
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Offcanvas Menu */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

            <div className=" offcanvas-body" id="offcanvasNavbarLabel">
              <ul className="navbar-nav me-auto mb-4   mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link fw-semibold text-dark "
                    href={"#"}
                    id="solutionDropdown"
                    role="button"
                  >
                    Solution
                    <RiArrowDownSLine/>
                  </Link>
                  <ul className="dropdown-menu" style={{width:'1190%',left:'-130%',border:'white',height:'400px'}}>
                   <div className=''>

<div className=' d-flex'>
<div>
  <div className=' ps-4'>
<div className='pt-4 d-flex gap-2'>
<div className='' style={{top:'-2px ',position:'relative'}}>
<BsBoxSeam/>
</div>
<div>

<h5 className='fw-bolder' style={{fontSize:'1em'}}>New and Professional Sellers</h5>
</div>
</div>
<p className='pt-1 w-75' style={{fontWeight:'100'}}>Start, manage, and grow your Amazon business with Jungle Scout.</p>
<div >

<li className='p-1  fs-5 '><Link href="/" className='text-decoration-none text-dark '>First-time Seller</Link></li>
<li className='p-1 fs-5'><Link href="/" className='text-decoration-none text-dark'>Professional Seller</Link></li>
<li className='p-1 fs-5 '><Link href="/" className='text-decoration-none text-dark'>Brand Owner</Link></li>
</div>

  </div>
</div>

  <div className='pt-4'>
<div className=' d-flex gap-2'>
<div>
  <img src="ItsSearch-icon.svg" className='w-100' alt="" />
</div>
<div>

<h5 className=' fw-bolder'>Enterprise Customers</h5>
</div>
</div>

<p className='w-75 fst-normal'>Empower business decisions with market intelligence data for leading global brands.</p>

<li className=' fs-5'><Link href={'http://junglescout.com'} className='text-decoration-none text-dark'></Link>Large Brand</li>
<li className='pt-3 fs-5'><Link href={'http://junglescout.com'} className='text-decoration-none text-dark'></Link>Retailer</li>
<li className='pt-3 fs-5'><Link href={'http://junglescout.com'} className='text-decoration-none text-dark'></Link>Agency</li>
<li className='pt-3 fs-5'><Link href={'http://junglescout.com'} className='text-decoration-none text-dark'></Link>Investor</li>
<li className='pt-3 fs-5'><Link href={'http://junglescout.com'} className='text-decoration-none text-dark'></Link>Consultant</li>
 </div>

<div>

  <img src="Why-Ad-1.webp " className='w-100 px-4' alt="" />
</div>
</div>

                   </div>

                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link fw-semibold text-dark"
                    href={"#"}
                    id="featuresDropdown"
                    role="button"
                  >
                    Features
                    <RiArrowDownSLine/>

                  </Link>
               {/* Hover2 */}
                  <ul className="dropdown-menu" style={{width:'1085px', height:'550px',left:'-250%',border:'none'}}>

<div className=' d-flex '>
{/* Cards */}
<div style={{backgroundColor:'#fef2e7',width:'400px',height:'290px'}} className='ps-5'>
<div>
<Functions/>
</div>
</div>

<div className=''style={{width: '363px',height: '300px'}}>

</div>

<div className=" h-75  d-flex flex-column align-items-center"style={{width:'30%'}}>
  <div className="d-flex flex-column ">
    <img
      src="js_cobalt-merchandising-feature@1.5x.webp"
      className="w-75 mb-3"
      alt="Jungle Scout Cobalt"
    />
    <span className="fw-bold pt-3">Jungle Scout Cobalt</span>
    <p className=" w-100 pt-4">
      Get brand and market-level intelligence, built exclusively for larger
      brands, retailers and agencies.
    </p>
    <Link href={''} className=' text-decoration-none text-primary '>Get A Demo <TiArrowRight/></Link>
  </div>
</div>

</div>
{/* cards */}
<div>
  <span className=' fs-3 fw-bold ps-4 pt-3'>Our Products</span>
</div>
<div className='d-flex justify-content-between ps-5 pt-3'>

<div className='w-75 h-75' id='Borders'>
  {/* Card1 */}
<Link href={''} className='text-decoration-none text-dark'>

<span className='ps-3 fs-5 fw-medium'>Jungle Scout</span>
<p className='w-75 h-50 ps-3 pt-2'>Top-rated Amazon intelligense SoftWare To start And Glow Your bussiness </p>

</Link>
</div>
  {/* Card2 */}

<div className='w-75 h-50'style={{borderLeft:'2px solid orange'}}>
<Link href={''} className='text-decoration-none text-dark'>

<span className='ps-3 fs-5 fw-medium'>API</span>
<p className=' ps-3 pt-2' style={{width:'80%'}}>Build Custom tools with industry-leading Amazon intellience data</p>

</Link>
</div>
<div className='w-75 h-50' style={{borderLeft:'2px solid darkblue'}}>
<Link href={''} className='text-decoration-none text-dark'>

<span className='ps-3'>Cobalt</span>
<p className=' ps-3 pt-3' style={{width:'73%'}}>Enterprice-levl tools to improve profitabilty and fuel multi-brand growth</p>

</Link>
</div>
<div className='w-75 h-50' style={{borderLeft:'2px solid blue'}}>
<Link href={''} className='text-decoration-none text-dark'>

<span className='ps-3'>Data Cloud</span>
<p className=' ps-3 pt-3'style={{width:'88%'}}>integrate rich Amazon data into yous prederred bussiness inteligence tools</p>

</Link>
</div>

</div>


     
                 
                  </ul>
               
               
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold text-dark" href={"#"}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link  fw-semibold text-dark"
                    href={"#"}
                    id="resourcesDropdown"
                    role="button"
                  >
                    Resources<MdOutlineKeyboardArrowDown/>
                  </Link>
                  <ul className="dropdown-menu"style={{width:'1080px',height:'540px',left:'-360%', border:'none'}}>
<div>
  <Recource/>
</div>

                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fw-semibold text-dark" href={"#"}>
                    Enterprises
                  </Link>
                </li>
              </ul>

              <div className="d-flex align-items-center gap-3 px-3" >
                <Link href={""} className="text-dark text-decoration-none">
                  <div className='d-flex fw-bold gap-1'>
                 <div>
                 <IoSearch/> 
                 </div>
                    <div>Log</div>
                    <Link href='/' className='text-decoration-none text-dark'>
                    in</Link>
                    </div>
                </Link>
                <button id="Buttonss" className="btn ">
                  Signup
                </button>
              </div>
            </div>
          
          </div>
          
          </div>
             
        </nav>
      </div>
      
 </>
  );
}     
