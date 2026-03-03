import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const AllPayments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading, error } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Payments</h1>

      {isLoading && <LoadingSpinner message="Loading payments..." />}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>Error loading payments: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && payments.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-500">No payments found.</p>
        </div>
      )}

      {!isLoading && !error && payments.length > 0 && (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="table w-full">
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
                <tr key={payment._id || index}>
                  <th>{index + 1}</th>
                  <td>{payment.parcelName}</td>
                  <td>{payment.amount}$</td>
                  <td>{payment.parcelId}</td>
                  <td>{new Date(payment.paidAt).toDateString()}</td>
                  <td>{payment.customerEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPayments;