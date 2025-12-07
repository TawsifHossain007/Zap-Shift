import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Amazon from '../../../assets/brands/amazon.png'
import AmazonV from '../../../assets/brands/amazon_vector.png'
import Casio from '../../../assets/brands/casio.png'
import MoonStar from '../../../assets/brands/moonstar.png'
import RanStad from '../../../assets/brands/randstad.png'
import Star from '../../../assets/brands/star.png'
import StarPPl from '../../../assets/brands/start_people.png'
import { Autoplay } from "swiper/modules";

const brandLogos = [Amazon,AmazonV,Casio,MoonStar,RanStad,Star,StarPPl]

const Brands = () => {
  return (
    <div className="mt-20">
        <h1 className="font-extrabold text-[28px] text-secondary text-center">We've helped thousands of sales teams</h1>
        <Swiper
        className="mt-10"
    slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
            delay:2500,
            disableOnInteraction: false
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}>
            {
                brandLogos.map((logo,index) => <SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>)
            }
      
    </Swiper>
    </div>
    
  );
};

export default Brands;
