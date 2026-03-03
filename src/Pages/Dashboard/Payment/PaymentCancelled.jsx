import React from "react";
import { Link } from "react-router";
import { FaTimesCircle, FaRedo, FaHome } from "react-icons/fa";

const PaymentCancelled = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl">
        <div className="card-body text-center">

          {/* Cancel Icon */}
          <div className="flex justify-center mb-4">
            <FaTimesCircle className="text-6xl text-error animate-pulse" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-error">
            Payment Cancelled
          </h2>

          <p className="text-gray-500 mt-2">
            Your payment was not completed. Don’t worry — you can try again.
          </p>

          <div className="divider"></div>

          {/* Info Box */}
          <div className="bg-base-200 p-4 rounded-xl text-sm text-gray-600">
            If your amount was deducted, it will be automatically refunded
            within a few business days depending on your bank.
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

            <Link to="/dashboard/my-parcels" className="btn btn-primary">
              <FaRedo className="mr-2" />
              Try Again
            </Link>

            <Link to="/" className="btn btn-outline">
              <FaHome className="mr-2" />
              Go Home
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;