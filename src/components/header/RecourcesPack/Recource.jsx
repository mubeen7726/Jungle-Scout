import React from 'react'
import { IoMdBook } from "react-icons/io";
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { FaGraduationCap } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import { BsChatLeftHeart } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";

export default function Recource() {
  return (<>
    <div className=' '>
<div className='row'>
<div className=' col-md-4 '>
{/* HeaderText */}
<div>

<div style={{backgroundColor:'#fef2e7',width:'93%', height:'525px'}}>

<div className=' d-flex gap-2  ps-3 pt-4'>
<div><IoMdBook/></div>
<div className='fs-5  fw-bold'>Reports</div>

</div>
{/* Text Options */}
<div className='ps-3'>
<li className='ps-3 w-75 pt-3'>
<Link href={''} className='w-50 fw-medium text-decoration-none fs-6 text-dark '>Amazon Market Watch: Luxury & Leisure Sports</Link>
</li>
<li className='ps-3 w-75 pt-3'>
<Link href={''} className='w-50 fw-medium text-decoration-none fs-6 text-dark '>Amazon Market Watch: Car Care & Cleaning</Link>
</li>

<li className='ps-3 w-75 pt-3'>
<Link href={''} className='w-50 fw-medium text-decoration-none fs-6 text-dark '>Brand Performance Spotlight: Patio, Lawn & Garden</Link>
</li>

<div className='pt-3 ps-4'>
    <img src="js_sports_outdoor_category_trends_unveiling_amazon_market_insights_10_2024_thumbnail.webp" className='w-75' alt="" />
</div>

<div className='pt-3 fw-light fs-6  ps-3' style={{width:'60%'}}>
Sports & Outdoors Category Insights
</div>
<p className='w-75 ps-3 pt-2  fw-light ' style={{}}>Market trends for outdoor recreation, team and leisure sports, and fitness equipment.
</p>


</div>
</div>
</div>






</div>
<div className=' col-md-4'>

<div className=''>
<div className=' d-flex pt-3 fs-3  gap-3'>
<div className=''>
<FaGraduationCap/>
</div>
<div className='fw-bold'>

Learn
</div>


</div>

<li className='pt-3'><Link href={''} className='text-decoration-none text-dark  fw-medium'>Blog</Link></li>
<li className='pt-3'><Link href={''} className='text-decoration-none text-dark fw-medium'>Videos</Link></li>
<li className='pt-3'><Link href={''} className='text-decoration-none text-dark fw-medium'>Webinars</Link></li>
<li className='pt-3'><Link href={''} className='text-decoration-none text-dark fw-medium'>Million Dollar Case Study</Link></li>
<li className='pt-3'><Link href={''} className='text-decoration-none text-dark fw-medium'>How to Sell on Amazon (2024)</Link></li>
<li className='pt-3'><Link href={''} className='text-decoration-none text-dark fw-medium'>Advanced Sellers Guide</Link></li>
<li className='pt-3'><Link href={''} className='text-decoration-none text-dark fw-medium'>All Resources</Link></li>
</div>

</div>

<div className='col-md-4 '>

<div className='d-flex  pt-4 fs-5 gap-3'>
    <div>
<FiTool/>
    </div>
    <div className='fw-bold'>
        Free Tools

    </div>
</div>
<div className='pt-3'>

<li className='pt-3'><Link href={''} className=' text-decoration-none text-dark fw-medium'>Profit Calculator</Link></li>
<li className='pt-3'><Link href={''} className=' text-decoration-none text-dark fw-medium'>Sales Estimator</Link></li>
</div>

<div className='pt-4'>
<div className=' d-flex gap-2 fs-5'>
<div>
<BsChatLeftHeart/>
</div>
<div className='fw-bold'>
Community


</div>

</div>

<div className='pt-3'>
    <li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fw-medium'>
    Partners
</Link></li>
    <li className='pt-2'><Link href={''} className=' text-decoration-none text-dark fw-medium'>Affiliate Program
    </Link></li>
</div>

</div>

<div className='pt-4'>
<div className=' d-flex fs-5 gap-2'>
<div>
<FaHeadphones/>
</div>
<div className='fw-bold'>
    
Support
</div>


</div>
<li><Link href={''} className='text-decoration-none text-dark fw-medium'>Help Center</Link></li>

</div>

</div>

 </div>      
  
  
  
    </div>
  </>
  )
}
