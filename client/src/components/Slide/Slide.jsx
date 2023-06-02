import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Slide.scss';
import CatCard from "../catCard/CatCard";

import { Pagination, Navigation } from "swiper";

function Slide({children,perview,pergroup}) {

  return (
     <div className='slide'>
        <div className="container">
            <Swiper
            slidesPerView={perview}
            spaceBetween={30}
            slidesPerGroup={pergroup}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            {children}
            
            </Swiper>
        </div>
    </div>
  )
}

export default Slide