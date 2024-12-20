import React from 'react';
import './Footer.css'
// import Carousels from './carousels/carousels';
import Link from 'next/link';
import FooterEnd from './FooterEndSettings/FooterEnd';
export default function Footer() {
  return (<>

    <footer className="py-4" style={{backgroundColor:'#fef2e7'}}>

{/* <Carousels/> */}
<div className=''>

{/* <div className=' container'>

<div className='row'>
<div className='col-lg-6 mb-5 mb-lg-5 ps-5'>
<img src="js-logo_ed549a3c85eb1f115998.webp"  style={{width:' 70px'}}alt='jungle js' />
</div>
<div className='col-lg-6 mb- mb-lg-5'>
<div className=' d-flex justify-content-end align-content-end'>
<div className='w-50 pt-3'>

<img src="badge-emerald_91a1483b997d56626ac8.webp" className='' style={{width:'50%',}} alt="" />
<img src="badge-aws_0d0eaee069c4d60705fe.webp" className=''style={{width:'50%',}} alt="" />
</div>
</div>
</div> */}
  <div className="container position-relative">
  <div className="row">
    <div className="col-lg-6 mb-5 ">
      <img
        src="js-logo_ed549a3c85eb1f115998.webp"
        style={{ width: "70px", position: "absolute", left: "0" }}
        alt="jungle js"
      />
    </div>
    <div className="col-lg-6">
      <div
        className="d-flex justify-content-end align-items-end h-100 "
        style={{ position: "absolute", right: "17px",top:'9px' }}
      >
        <div className="w-50 pt-3  gap-3 d-flex">
        
          <img
            src="badge-emerald_91a1483b997d56626ac8.webp"
            style={{ width: "50%" ,height:'40px'}}
        
            alt=""
          />
          <img
            src="badge-aws_0d0eaee069c4d60705fe.webp"
            style={{ width: "50%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>

{/* </div> */}
  <div class="container pt-2">
 <div class="row ">
    <div class="col-md-6 ">
      <div class="">
      <div class="w-50">
          <h4 class="fw-bold pt-2" style={{fontSize: '1.5em'}}>
            Accelerate your Amazon business today
          </h4>
        </div>
        <div class="pt-4">
          <p class="fw-semibold">For global brands and retailers</p>
          <Link href="/" class="text-decoration-none">Explore Jungle Scout Cobalt</Link>
        </div>
      </div>
    </div>


    {/* <div class="col-md-6 d-flex flex-column flex-md-row pt-2 ps-5">
      <div class="mb-4 mb-md-0 me-md-4 ps-5 ">
        <h5 class="fw-medium w-75">Products & Pricing</h5>
        <ul class="list-unstyled mt-3">
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark   fw-light">Why Jungle Scout</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Jungle Scout API</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark   fw-light">Jungle Scout Cobalt</Link></li>
          <li className='pt-2 '><Link href="/" class="text-decoration-none text-dark  fw-light">Jungle Scout Data Cloud</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Plans & Pricing</Link></li>
        </ul>
      </div>

      <div class="mb-4 mb-md-0 me-md-4 ">
        <h5 class="fw-medium">Resources</h5>
        <ul class="list-unstyled mt-3 ">
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">All Resources</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Blog</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Reports</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Webinars</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Help Center</Link></li>
        </ul>
      </div>

      <div className='mb-4 mb-md-0 me-md-4 '>
        
        <h5 class="fw-medium">Company</h5>
        <ul class="list-unstyled mt-3">
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">About Us</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Leadership</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Press</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Careers</Link></li>
          <li className='pt-2'><Link href="/" class="text-decoration-none text-dark  fw-light">Contact Us</Link></li>
        </ul>
      </div>
    </div> */}

<div className="col-md-6  d-flex flex-column flex-md-row pt-2 ps-5">
  <div className="mb-4 mb-md-0 me-md-4 ms-md-auto">
    <h5 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Products & Pricing</h5>
    <ul className="list-unstyled mt-3" style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Why Jungle Scout</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Jungle Scout API</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Jungle Scout Cobalt</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Jungle Scout Data Cloud</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Plans & Pricing</Link>
      </li>
    </ul>
  </div>

  <div className="mb-4 mb-md-0 me-md-4 ms-md-auto">
    <h5 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Resources</h5>
    <ul className="list-unstyled mt-3" style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>All Resources</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Blog</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Reports</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Webinars</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Help Center</Link>
      </li>
    </ul>
  </div>

  <div className="mb-4 mb-md-0 me-md-4 ms-md-auto">
    <h5 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Company</h5>
    <ul className="list-unstyled mt-3" style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>About Us</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Leadership</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Press</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Careers</Link>
      </li>
      <li className="pt-2">
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontWeight: 400 }}>Contact Us</Link>
      </li>
    </ul>
  </div>
</div>


  </div>
</div>
<div className='container'>
<div  className='w-100'>

<div className=' d-flex justify-content-center align-items-center '>

<hr  style={{border:'2px solid black',width:'95%'}} className=''></hr>
</div>
</div>
</div>
<FooterEnd/>
</div>
    </footer>
  </>
  );
}

