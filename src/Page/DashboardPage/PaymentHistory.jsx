import React, { useContext, useState } from "react";
import SharedTitle from "../../Components/SharedTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import LoadingPage from "../loading/LoadingPage";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { CiSearch } from "react-icons/ci";

const PaymentHistory = () => {
  const [search,setSearch]=useState('')
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [currentPage,setCurrentPage]=useState(1)
  const [totalPage,setTotalPage]=useState(1)
  const { data: history, isLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email,currentPage,search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/payment-history?email=${user?.email}&page=${currentPage}&limit=10&search=${search}`
      );
      setTotalPage(Math.ceil(data.total /10))
      return data.data;
    },
  });
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div>
      <SharedTitle title={"Cash Chronicles"}></SharedTitle>
  <div className="relative w-full">
    <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
    <CiSearch />
    </span>
    <input
      type="text"
      placeholder="Search..."
      onChange={(e)=>setSearch(e.target.value)}
      className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg w-full"
    />
 
   
  </div>
      <div data-aos="fade-up"
     data-aos-duration="2000">
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
            <tfoot>
              <tr>
                <td colSpan="7" className="text-center">
                  <div className="flex justify-end items-center my-4 space-x-2">
                    <button 
                    onClick={()=>{
                      if(currentPage > 1){
                        setCurrentPage(currentPage - 1)
                      }
                    }}
                    disabled={currentPage ===1}
                    className={`btn btn-sm ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-black'}`}>previous</button>
                    <span>{currentPage} of {totalPage}</span>
                    <button
                    onClick={()=>{
                      if(currentPage < totalPage){
                        setCurrentPage(currentPage + 1)
                      }
                    }}
                    disabled={currentPage=== totalPage}
                    className={`btn btn-sm ${currentPage === totalPage ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-black'}`}>next</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
