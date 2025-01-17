import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import SharedTitle from "../../Components/SharedTitle";
import useCamp from "../../Hook/useCamp";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageCamp = () => {
    const [camp,isLoading,refetch]=useCamp()
    const axiosSecure = useAxiosSecure()
    const handleDelete=async(id)=>{
    const {data}= await axiosSecure.delete(`/remove-camp/${id}`)
    if(data.deletedCount){
      toast.success('camp deleted successfully')
      refetch()
    }
    }
    if(isLoading){
        return <p className="text-3xl">Please wait</p>
    }
    return (
        <div className="max-w-7xl mx-auto">
        <SharedTitle title={'Mange Camps'}></SharedTitle>
        <div>
            <h3 className="text-2xl font-semibold mb-5">Total Camp {camp?.length}</h3>
            <div className="overflow-x-auto rounded-t-xl">
  <table className="table">

    <thead className="bg-[#a8bdbc]">
      <tr>
        <th>Camp</th>
        <th>Professional Name</th>
        <th className="text-center">Action</th>
      
      </tr>
    </thead>
    <tbody>
    {
        camp?.map(item=>   <tr key={item._id}>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item?.camp_name}</div>
                  <div className="text-sm opacity-50">{item?.location}</div>
                </div>
              </div>
            </td>
            <td>
          <p>{item?.professional_name}</p>
            </td>
            <td>
                <div className="flex items-center justify-center gap-7">
                <Link to={`/dashboard/updateCamp/${item?._id}`}>
                <button className="btn ">
                        <FaPenAlt></FaPenAlt>
                    </button>
                </Link>
                    <button onClick={()=>handleDelete(item?._id)} className="btn border-none bg-[#7e9695]">
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                </div>
            </td>
           
          </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default ManageCamp;