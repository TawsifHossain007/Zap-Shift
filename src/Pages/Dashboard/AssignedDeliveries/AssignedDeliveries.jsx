import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "Rider_Assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=Rider_Assigned`
      );
      return res.data;
    },
  });

  const handleStatusUpdate = (parcel, status) => {
    const parcelInfo = { deliveryStatus: status, riderID: parcel.riderID, trackingId: parcel.trackingId };

    let message = `Parcel Status is updated with ${status
      .split("_")
      .join(" ")}`;

    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, parcelInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-5xl font-bold">Assigned Parcels</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Confirmation</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "Rider_Assigned" ? (
                    <>
                      <button
                        onClick={() =>
                          handleStatusUpdate(parcel, "Rider_On_The_Way")
                        }
                        className="btn btn-primary text-black"
                      >
                        {" "}
                        Accept{" "}
                      </button>
                      <button className="btn btn-warning text-black ms-2">
                        {" "}
                        Reject{" "}
                      </button>
                    </>
                  ) : (
                    <span className="text-green-500 font-medium">Accepted</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleStatusUpdate(parcel, "parcel_picked_up")
                    }
                    className="btn btn-primary text-black"
                  >
                    {" "}
                    Marked As Picked Up{" "}
                  </button>
                  <button
                    onClick={() =>
                      handleStatusUpdate(parcel, "parcel_delivered")
                    }
                    className="btn btn-primary text-black mx-2"
                  >
                    {" "}
                    Marked As Delivered{" "}
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

export default AssignedDeliveries;
