import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import CustomerTop from "../../../assets/customer-top.png"

const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  return (
    <div className="mt-30">
        <div className="flex items-center justify-center flex-col">
            <img src={CustomerTop} alt="" />
            <h1 className="text-secondary pt-5 font-extrabold text-[40px] text-center">What our customers are sayings</h1>
            <p className="text-[#606060] pt-3 text-center">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
        </div>
      
      <div className="mt-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay = {{
            delay: 2000,
            disableOnInteraction: false
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            reviews.map(review => <SwiperSlide key={review.id}>
                <ReviewCard review={review}></ReviewCard>
                </SwiperSlide>)
          }

        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
