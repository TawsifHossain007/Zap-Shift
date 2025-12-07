import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative mt-10">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
      </Carousel>

      {/* button left */}
      <div className="absolute top-95 left-20 translate-y-1/2">
        <p className="text-[#606060]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
        <div className="flex items-center gap-4 mt-5">
          <div className="flex items-center gap-1">
            <button className="btn btn-primary text-black border border-gray-600">
              Track Your Parcel
            </button>
            <FaArrowAltCircleUp size={48}></FaArrowAltCircleUp>
          </div>

          <button className="btn">Be A Rider</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
