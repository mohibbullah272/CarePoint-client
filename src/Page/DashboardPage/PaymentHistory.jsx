import React, { useContext } from "react";
import SharedTitle from "../../Components/SharedTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import LoadingPage from "../loading/LoadingPage";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: history, isLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/payment-history?email=${user?.email}`
      );
      return data;
    },
  });
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div>
      <SharedTitle title={"Cash Chronicles"}></SharedTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Camp Name</th>
                <th>Camp Fee</th>
                <th>Payment Status</th>
                <th>Confirmation Status</th>
                <th>transactions Id</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item._id}>
                  <th>{item.camp_name}</th>
                  <td>{item.fee}</td>
                  <td>{item.payment_status}</td>
                  <td>{item.confirmation_status}</td>
                  <td>{item.transId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
