import React from "react";
import safeDelivery from "../../../assets/safe-delivery.png";
import liveTracking from "../../../assets/live-tracking.png";
import CustomerSupport from "../../../assets/customer-support.png";
const Features = () => {
  return (
    <div className="space-y-10 border-t-2 border-dashed border-gray-400 pt-15">
      <div className="bg-white rounded-3xl  p-8 flex items-center gap-8 max-w-5xl mx-auto">
        {/* Left Illustration */}
        <div className="shrink-0">
          <img src={liveTracking} alt="Live Tracking" className="w-44 h-auto" />
        </div>

        {/* Vertical Divider */}
        <div className="border-l-2 border-dashed border-gray-300 h-32"></div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Live Parcel Tracking
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-3xl  p-8 flex items-center gap-8 max-w-5xl mx-auto">
        {/* Left Illustration */}
        <div className="shrink-0">
          <img src={safeDelivery} alt="Safe Delivery" className="w-44 h-auto" />
        </div>

        {/* Vertical Divider */}
        <div className="border-l-2 border-dashed border-gray-300 h-32"></div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            100% Safe Delivery
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time
          </p>
        </div>
      </div>
      <div className="bg-white rounded-3xl  p-8 flex items-center gap-8 max-w-5xl mx-auto">
        {/* Left Illustration */}
        <div className="shrink-0">
          <img src={CustomerSupport} alt="Customer Support" className="w-44 h-auto" />
        </div>

        {/* Vertical Divider */}
        <div className="border-l-2 border-dashed border-gray-300 h-32"></div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            24/7 Call Center Support
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
