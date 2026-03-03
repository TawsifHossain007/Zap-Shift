import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

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
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Payment History</h2>

      {isLoading && <LoadingSpinner message="Loading payment history..." />}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>Error loading payments: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && payments.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-500">No payment history found.</p>
        </div>
      )}

      {!isLoading && !error && payments.length > 0 && (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="table table-zebra">
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
