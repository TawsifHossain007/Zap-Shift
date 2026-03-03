import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], isLoading, error } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div className="p-8">
      <h2 className="text-5xl font-bold">Payment History</h2>

      {isLoading && (
        <div className="text-center py-8">
          <p className="text-lg">Loading payment history...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
          <p>Error loading payments: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && payments.length === 0 && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500">No payment history found.</p>
        </div>
      )}

      {!isLoading && !error && payments.length > 0 && (
        <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Parcel Id</th>
              <th>Amount</th>
              <th>Paid At</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.parcelId}</td>
                <td>{payment.amount}$</td>
                <td>{new Date(payment.paidAt).toDateString()}</td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
};

export default PaymentHistory;
