import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {
     const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "Rider_Assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`
      );
      return res.data;
    },
  });

  const calculatePayout = (parcel) => {
    if(parcel.senderDistrict === parcel.receiverDistrict){
        return parcel.cost*0.8
    }
    else{
        return parcel.cost*0.6
    }
  }
    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table table-zebra mt-10">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Pickup District</th>
              <th>Cost</th>
              <th>Payout</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                
                <td>{parcel.createdAt}</td>
                <td>{parcel.senderDistrict}</td>
                <td>{parcel.cost} - taka</td>
                <td>{calculatePayout(parcel)}</td>
                <td>
                  <button
                    className="btn btn-primary text-black"
                  >
                    Cashout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default CompletedDeliveries;