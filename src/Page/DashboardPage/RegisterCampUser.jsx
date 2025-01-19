import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import SharedTitle from "../../Components/SharedTitle";
import { MdDeleteForever } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
const RegisterCampUser = () => {
    const {user}=useContext(AuthContext)
    const {data:camps}=useQuery({
        queryKey:["registerCampUser",user?.email],
        queryFn:async()=>{
            const {data}=await axios(`http://localhost:8500/register-camp?email=${user?.email}`)
            return data
        }
    })
    console.log(camps)
    return (
        <div className="bg-[#fafafa]">
            <SharedTitle title={"Who's Camping Now ?"}></SharedTitle>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Camp Name</th>
        <th>Camp Fee</th>
        <th>Participant Name</th>
        <th>payment Status</th>
        <th>confirmation status</th>
        <th>Cancel</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
 {
    camps?.map((camp,idx)=> <tr key={camp._id}>
        <td>{camp?.camp_name}</td>
        <td><p className="text-right">${camp.camp_fee}</p></td>
        <td>{camp?.name}</td>
        <td>{
            camp?.payment_status==="unpaid"?<Link to={`/dashboard/payment/${camp?._id}`}>
            <button className=" text-gray-900 bg-[#8fb0ae] p-3 rounded-xl" >Pay</button>
            </Link>:<button disabled className=" text-gray-900 bg-[#8fb0ae] p-3 rounded-xl">Paid</button>
            }</td>
            <td>
             <p className="text-center bg-red-300/10 shadow p-1 rounded-md">   {
                    camp?.
                    confirmation_status
                    
                }</p>
            </td>
            <td>
                {
                    camp.payment_status ==='unpaid'?<button className="btn bg-slate-50 ">
                       <MdDeleteForever className="text-black text-xl" />
                    </button>:<button className="btn cursor-not-allowed" disabled>
                    <MdDeleteForever className="text-xl"/>
                    </button>
                }
            </td>
    <td>
        {
            camp.payment_status !=='unpaid'?<button className="btn bg-slate-50">
                <FaRegComment />
            </button>:<button disabled className="btn">
            <FaRegComment />
            </button>
        }
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

export default RegisterCampUser;