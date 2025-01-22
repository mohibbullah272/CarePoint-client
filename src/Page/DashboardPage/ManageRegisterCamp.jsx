import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import SharedTitle from "../../Components/SharedTitle";
import { MdDeleteForever } from "react-icons/md";
import LoadingPage from "../loading/LoadingPage";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageRegisterCamp = () => {
  const axiosSecure = useAxiosSecure();
  const { data: campData ,refetch,isLoading} = useQuery({
    queryKey: ["manageRegisterCamp"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/manage-register-camp`);
      return data;
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
  
  if(isLoading){
    return <LoadingPage></LoadingPage>
  }
  return (
    <div>
      <SharedTitle title={"Camp Records"}></SharedTitle>

      <div>
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
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageRegisterCamp;
