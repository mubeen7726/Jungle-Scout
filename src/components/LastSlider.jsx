import React from 'react'
import Image from 'next/image'
function LastSlider() {
  return (
    <>
    <div className='text-center ' style={{marginTop:"10%"}} >
      <h2 className='fw-bolder'>Fuel your revenue growth with industry-leading data</h2>
    </div>
    <div id="carouselExampleIndicators" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2 " className='bg-dark-subtle'></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='bg-dark-subtle'></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 4 " className='bg-dark-subtle'></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 5" className='bg-dark-subtle'></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active mb-5 mt-5">
      <Image src="/Competitive-Intelligence-Carousel-100k.svg" className="d-block w-100" alt="..." width={100} height={100}></Image>
    </div>
    <div className="carousel-item">
    <Image src="/Competitive-Intelligence-Carousel-12.5tb.svg" className="d-block w-100" alt="..."  width={100} height={100}></Image>
    </div>
    <div className="carousel-item">
    <Image src="/Competitive-Intelligence-Carousel-50B-annual-asisted-sales-metric.svg" className="d-block w-100" alt="..."  width={100} height={100}></Image>
    </div>
    <div className="carousel-item">
    <Image src="/Competitive-Intelligence-Carousel-600M.svg" className="d-block w-100" alt="..."  width={100} height={100}></Image>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='container text-center d-md-none mt-5 justify-content-center '>
  <Image src={'/G2-6-badges-Fall-2024-Mobile-Fixed.webp'} width={300} height={250} alt='Error'></Image>
</div>
<div className='container text-center d-none d-md-block  mt-5  ' >
  <Image src={'/G2-6-badges-Fall-2024-Desktop-1.png'} width={600} height={100} alt='Error'></Image>
</div>
    </>
  )
}

export default LastSlider
