import React from 'react';
import './func.css';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Functions() {
  return (
    <div>
      <div className="container">
        <div className="button-container">
          {/* First button with hover box always visible */}
          <button className="btn w-100" id="Hovers">
            <div className=' d-flex justify-content-between'>
              <div>

            Competitor Insights
              </div>
            <div className='px-3'>
             <MdKeyboardArrowRight className='fs-5'/>

            </div>
            </div>
            
             </button>
          <div className="hover-box">
            <div className="pt-3">
              <div className='ps-3'>

              <span className="w-25 pt-5  text-black-50" style={{fontSize:'0.95em'}}>Gain a competitive edge with data-driven market intelligence.</span>
              </div>
              <div className='ps-3'>

       <li className='pt-4 '><Link href={''} className='text-decoration-none text-dark fs-5'>
       <div className=' d-flex gap-2'>
<div className=''>

       Competitive Intelligence
</div>
<div>
<img src="New.png" className='w-50' alt="" />
</div>
       </div>
       
       </Link>
       </li>       
       <li className='pt-2'><Link href={''}  className='text-decoration-none text-dark fs-6'>Rank Tracker</Link></li>       
       <li className='pt-2'><Link href={''} className='text-decoration-none text-dark fs-6'>Keyword Scout  </Link></li>       
       <li className='pt-2'><Link  href={''} className='text-decoration-none text-dark fs-6'>AI Assist</Link></li>       
       <li className='pt-2'><Link  href={''} className='text-decoration-none text-dark fs-6'>Browser Extension </Link></li>       
              </div>
            </div>
          </div>

          <button className="btn w-100 mt-1" id="Hovers">
            <div className=' d-flex justify-content-between'>
              <div>
   Keyword Analysis
            </div>
            <div className='px-3'>
             <MdKeyboardArrowRight className='fs-5'/>

            </div>
            </div>
           
            </button>
          <div className="hover-box">
<div>
<div className='p-3 pt-3 w-75'>

<span className='w-25 text-black-50'>
Analyze consumer demand and maximize your revenue potential.
</span>
<div className='pt-3'>

<li className='pt-2'>

<Link href={''} className='text-decoration-none text-dark fs-5 fw-medium'>Keyword Scout</Link>
</li>
<li className='pt-2'>

<Link href={''} className='text-decoration-none text-dark fs-5 fw-medium'>Rank Tracker</Link>
</li>
<li className='pt-2'>

<Link href={''} className='text-decoration-none text-dark fs-5 fw-medium'>Opportunity Finder</Link>
</li>
</div>
</div>


</div>


          </div>

          <button className="btn w-100 mt-1" id="Hovers">
          <div className=' d-flex justify-content-between'>
              <div>
              Product Research
              </div>
            <div className='px-3'>
             <MdKeyboardArrowRight className='fs-5'/>

            </div>
            </div>

            
            </button>
          <div className="hover-box">

<div >
  <div className='w-100 p-3 pt-4'>
<div className='w-100 text-black-50'>
Uncover profitable product opportunities on Amazon.
</div>
  </div>
  <div className='ps-3'>

<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-medium'>Browser Extension</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-medium'>Opportunity Finder</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-medium'>Product Tracker</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-medium'>Product Database</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-medium'>Category Trends</Link></li>
  </div>



</div>

          </div>

          <button className="btn w-100 mt-1" id="Hovers">
          <div className=' d-flex justify-content-between'>
              <div>
              Market Intelligence
              </div>
            <div className='px-3'>
             <MdKeyboardArrowRight className='fs-5'/>

            </div>
            </div>

            </button>

          <div className="hover-box">
            <div>
              <div className='w-75 p-2 pt-3'>
<div className=' w-100  text-black-50'>
Streamline market research and make informed e-commerce decisions.
</div>
              </div>
              <div className='ps-3'>

       <li className='pt-4 '><Link href={''} className='text-decoration-none text-dark fs-5'>
       <div className=' d-flex gap-2'>
<div className=''>

       Competitive Intelligence
</div>
<div>
<img src="New.png" className='w-50' alt="" />
</div>
       </div>
       
       </Link>
       </li>       
       <li className='pt-2'><Link href={''}  className='text-decoration-none text-dark fs-6'>Rank Tracker</Link></li>       
       <li className='pt-2'><Link href={''} className='text-decoration-none text-dark fs-6'>Keyword Scout  </Link></li>       
       <li className='pt-2'><Link  href={''} className='text-decoration-none text-dark fs-6'>AI Assist</Link></li>       
       <li className='pt-2'><Link  href={''} className='text-decoration-none text-dark fs-6'>Browser Extension </Link></li>       
              </div>
            
            </div>
            
            </div>


          <button className="btn w-100  mt-1" id="Hovers">
            <div className=' d-flex justify-content-between'>
              <div>
              Business Operations
              </div>
            <div className='px-3'>
             <MdKeyboardArrowRight className='fs-5'/>

            </div>
            </div>

            </button>
          <div className="hover-box">
            <div className='w-75 p-3 pt-3'>

            <div className='w-100 text-black-50'>
            Boost efficiency and save time with tools to automate your business.
            </div>
            </div>

<div className='ps-4'>

<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>Review Automation
</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>
Sales Analytics</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>
Advertising Analytics</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>
Listing Builder</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>
Supplier Database</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>
Inventory Manager</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>
FBA Reimbursements</Link></li>
<li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fs-6 fw-normal'>
AI Assist</Link></li>
</div>

            </div>
        </div>
      </div>

      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script> */}
    </div>
  );
}
