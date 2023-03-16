import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";




const ART = (props) => {
  return (
    <ART_SQUARE>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1>{props.name}</h1>
          <img src={props.imageURL} alt={props.name} key={props.index} />
          <p>{props.description}</p>
        </SwiperSlide>

      </Swiper>
    </ART_SQUARE>
  )
}

const ART_SQUARE = styled.div`
    width: 100%;
    height: 100vh;

    .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}



 


`
export default ART