import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCheckCircle, FaBoxOpen, FaReceipt } from "react-icons/fa";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl">
        <div className="card-body text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-6xl text-success animate-bounce" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-success">
            Payment Successful!
          </h2>

          <p className="text-gray-500 mt-2">
            Your parcel payment has been completed successfully.
          </p>

          {/* Divider */}
          <div className="divider"></div>

          {/* Transaction Info */}
          <div className="space-y-4 text-left">

            <div className="flex items-center gap-3 bg-base-200 p-4 rounded-xl">
              <FaReceipt className="text-xl text-primary" />
              <div>
                <p className="text-sm text-gray-500">Transaction ID</p>
                <p className="font-semibold break-all">
                  {paymentInfo.transactionId}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-base-200 p-4 rounded-xl">
              <FaBoxOpen className="text-xl text-secondary" />
              <div>
                <p className="text-sm text-gray-500">Tracking ID</p>
                <p className="font-semibold break-all">
                  {paymentInfo.trackingId}
                </p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/dashboard/my-parcels" className="btn btn-primary text-black">
              View My Parcels
            </Link>

            <Link to="/" className="btn btn-outline">
              Go Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;