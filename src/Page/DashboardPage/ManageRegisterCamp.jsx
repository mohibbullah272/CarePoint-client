import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import SharedTitle from "../../Components/SharedTitle";
import { MdDeleteForever } from "react-icons/md";


const ManageRegisterCamp = () => {
    const axiosSecure = useAxiosSecure()
    const {data:campData} = useQuery({
        queryKey:["manageRegisterCamp"],
        queryFn:async()=>{
            const {data} = await axiosSecure.get(`/manage-register-camp`)
            return data 
        }
    })
    return (
        <div>
       <SharedTitle title={'Camp Records'}></SharedTitle>

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
         {
            campData?.map((camp)=> <tr key={camp._id}>
                <td>{camp.camp_name}</td>
                <td>{camp?.name}</td>
                <td><p className="text-right" >${camp?.camp_fee}</p></td>
                <td>
                    <p className="text-center font-semibold">{camp?.payment_status}</p>
                </td>
                    <td>
                     <p className="text-center bg-red-300/10 shadow p-1 rounded-md">   {
                            camp?.
                            confirmation_status
                            
                        }</p>
                    </td>
                    <td>
                        {
                            camp.payment_status !=='unpaid' || camp.confirmation_status !=='pending' ?<button className="btn bg-slate-50 ">
                               <MdDeleteForever className="text-black text-xl" />
                            </button>:<button className="btn cursor-not-allowed" disabled>
                            <MdDeleteForever className="text-xl"/>
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

export default ManageRegisterCamp;