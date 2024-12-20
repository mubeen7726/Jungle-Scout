
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/Autoplay'
import './index.css'

// import required modules
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
      
        slidesPerView={2}
        spaceBetween={45}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation
        autoplay={{
          delay:7000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        modules={[Pagination,Navigation,Scrollbar,Autoplay]}
        className="mySwiper p-5  "
        id='swiper-large'
         breakpoints={{
          // When the viewport width is >= 320px (small screens like mobile)
          320: {
            slidesPerView: 1, // 1 slide per view
          },
          // When the viewport width is >= 768px (for tablets)
          768: {
            slidesPerView: 1, // 2 slides per view
          },
          // When the viewport width is >= 1024px (for desktop)
          1024: {
            slidesPerView: 2, // 3 slides per view
          },
        }}
      >
        <SwiperSlide><img src="/download (5).png" alt="Error" /></SwiperSlide>
        <SwiperSlide><img src="/download (9).png" alt="Error" /></SwiperSlide>
        <SwiperSlide><img src="/download (7).png" alt="Error" /></SwiperSlide>
        <SwiperSlide><img src="/download (8).png" alt="Error" /></SwiperSlide>
     
      </Swiper>
    </>
  );
}
