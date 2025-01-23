import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import SharedTitle from "../../Components/SharedTitle";
import { MdDeleteForever } from "react-icons/md";
import LoadingPage from "../loading/LoadingPage";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const ManageRegisterCamp = () => {
  const axiosSecure = useAxiosSecure();
  const [search,setSearch]=useState('')
  const [currentPage,setCurrentPage]=useState(1)
  const [totalPage,setTotalPage]=useState(1)
  const { data: campData ,refetch,isLoading} = useQuery({
    queryKey: ["manageRegisterCamp",currentPage,search],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/manage-register-camp?page=${currentPage}&limit=10&search=${search}`);
      setTotalPage(Math.ceil(data.total / 10))
      return data.data;
    },
  });
  const removeRegister = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#8fb0ae",
        cancelButtonColor: "#9CA3AF",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
       const {data} =await axiosSecure.delete(`/remove-register/${id}`)
        if(data.deletedCount){
            refetch()
         toast.success('Registation Removed')
        }
      }); 
};
      
  const handleUpdateStatus=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "would you like to confirm it!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#8fb0ae",
        cancelButtonColor: "#9CA3AF",
        confirmButtonText: "Confirm!"
      }).then(async(result) => {
     const {data}= await axiosSecure.patch(`/update-status/${id}`)
   if(data.modifiedCount){
    toast.success('payment confirmation successful')
    refetch()
   }
    
      });
  }
  
 
  return (
    <div>
      <SharedTitle title={"Camp Records"}></SharedTitle>
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
          <table className="table w-full">
            <thead>
              <tr>
                <th>Camp Name</th>
                <th>Participant Name</th>
                <th>Camp Fee</th>
                <th>payment Status</th>
                <th>confirmation status</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {campData?.map((camp) => (
                <tr key={camp._id}>
                  <td>{camp.camp_name}</td>
                  <td>{camp?.name}</td>
                  <td>
                    <p className="text-right">${camp?.camp_fee}</p>
                  </td>
                  <td>
                    <p className="text-center font-semibold">
                      {camp?.payment_status}
                    </p>
                  </td>
                  <td>
               {
                camp.confirmation_status ==='pending'?     <p onClick={()=>handleUpdateStatus(camp._id)} className="text-center bg-red-300/10 shadow p-1 rounded-md">
                {" "}
                {camp?.confirmation_status}
              </p>:<p className="text-center bg-green-300/10 shadow p-1 rounded-md">
              {camp?.confirmation_status}
              </p>
               }
                  </td>
                  <td>
                    {camp.payment_status === "paid" &&
                    camp.confirmation_status === "Confirmed" ? (
                        <button className="btn cursor-not-allowed" disabled>
                        <MdDeleteForever className="text-xl" />
                      </button>
                    ) : (
                        <button onClick={()=>removeRegister(camp._id)} className="btn bg-slate-50 ">
                        <MdDeleteForever className="text-black text-xl" />
                      </button>

                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
              <td colSpan="7" className="text-center">
 <div className="flex justify-end items-center my-4 space-x-2">
<button
  className={`btn btn-sm ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-black'}`}
onClick={()=>{
  if(currentPage > 1){
    setCurrentPage(currentPage -1)
  }
}}
disabled={currentPage ===1}
>previous</button>
<span>page {currentPage} of {totalPage}</span>
<button
className={`btn btn-sm ${currentPage === totalPage ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-black'}`}
onClick={()=>{
  if(currentPage < totalPage){
    setCurrentPage(currentPage + 1)
  }
}}
disabled={currentPage=== totalPage}
>Next</button>
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

export default ManageRegisterCamp;
