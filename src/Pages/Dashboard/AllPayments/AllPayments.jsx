import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllPayments = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto p-8">
        <h1 className="text-5xl font-bold">All Payments</h1>
        <table className="table table-zebra mt-10">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Parcel Id</th>
              <th>Paid At</th>
              <th>Customer Email</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.amount}$</td>
                <td>{payment.parcelId}</td>
                <td> {new Date(payment.paidAt).toDateString()}</td>
                <td>{payment.customerEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPayments;
