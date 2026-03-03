import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const AssignedDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcels = [], isLoading, error, refetch } = useQuery({
    queryKey: ["parcels", user.email, "Rider_Assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=Rider_Assigned`
      );
      return res.data;
    },
    enabled: !!user?.email,
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
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Assigned Parcels</h1>

      {isLoading && <LoadingSpinner message="Loading assigned parcels..." />}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>Error loading parcels: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && parcels.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-500">No assigned parcels found.</p>
        </div>
      )}

      {!isLoading && !error && parcels.length > 0 && (
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Parcel Name</th>
              <th>Sender Name</th>
              <th>Recipient Name</th>
              <th>Recipient District</th>
              <th>Confirmation</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.senderName}</td>
                <td>{parcel.receiverName}</td>
                <td>{parcel.receiverDistrict}</td>
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
      )}
    </div>
  );
};

export default AssignedDeliveries;
