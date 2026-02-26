import React from "react";
import LocationMerchant from "../../../assets/location-merchant.png";
import MerchantBg from "../../../assets/Merchant-bg.png";

const Merchant = () => {
  return (
    <div className="px-6 py-12">
      {/* Main Container */}
      <div
        className="rounded-3xl overflow-hidden relative bg-[#083c3c] text-white"
        style={{
          backgroundImage: `url(${MerchantBg})`,
          backgroundSize: "95%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-10 py-16">
          {/* Left Content */}
          <div className="max-w-xl space-y-6">
            <h1 className="font-extrabold text-[40px] leading-snug">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>

            <p className="text-gray-300 font-normal text-[16px]">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Become a Merchant
              </button>

              <button className="border border-lime-400 text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-black transition">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-shrink-0">
            <img
              src={LocationMerchant}
              alt="Merchant illustration"
              className="w-[350px] lg:w-[420px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
