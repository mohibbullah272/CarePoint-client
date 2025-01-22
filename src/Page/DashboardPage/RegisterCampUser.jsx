import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import SharedTitle from "../../Components/SharedTitle";
import { MdDeleteForever } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Modal, Button, Textarea, Rating } from "@mantine/core";

const RegisterCampUser = () => {
    const {user}=useContext(AuthContext)
    const [opened, setOpened] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);
    const [campId, setCampId] = useState(null);
    const {data:camps,refetch}=useQuery({
        queryKey:["registerCampUser",user?.email],
        queryFn:async()=>{
            const {data}=await axios(`http://localhost:8500/register-camp?email=${user?.email}`)
            return data
        }
    })
    const axiosSecure = useAxiosSecure()
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
    const openModal=(id)=>{
        setCampId(id)
        setOpened(true)
    }
    const handleSubmit=async()=>{
        try{
            await axiosSecure.post('/add-feedback',{
                rating,
                feedback,
                photo:user?.photoURL,
                campId

            })
            toast.success('Thanks for your feedback')
        }catch(err){
            console.log(err)
        }
        finally{
            setOpened(false); 
      setFeedback(""); 
      setRating(0); 
      setCampId(null)
           
        }
    }
    return (
        <div className="bg-[#fafafa]">
            <Modal   opened={opened}
        onClose={() => setOpened(false)}
        title="Give Your Feedback">
 <div>
    
          <Rating
            value={rating}
            onChange={setRating}
            size="lg"
            color="yellow"
            label="Rate us:"
          />

       
          <Textarea
            placeholder="Write your feedback here..."
            label="Your Feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.currentTarget.value)}
            minRows={4}
            mt="md"
          />

     
          <Button
            fullWidth
            mt="md"
            onClick={handleSubmit}
            disabled={!feedback || rating === 0} 
          >
            Submit Feedback
          </Button>
        </div>
            </Modal>
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
            </Link>:<button disabled className=" text-gray-500 bg-gray-300 p-3 rounded-xl">Paid</button>
            }</td>
            <td>
             <p className={`text-center ${camp.confirmation_status==='pending'?"bg-red-300/10":"bg-green-300/10"}  shadow p-1 rounded-md`}>   {
                    camp?.
                    confirmation_status
                    
                }</p>
            </td>
            <td>
                {
                    camp.payment_status ==='unpaid'?<button onClick={()=>removeRegister(camp._id)} className="btn bg-slate-50 ">
                       <MdDeleteForever className="text-black text-xl" />
                    </button>:<button className="btn cursor-not-allowed" disabled>
                    <MdDeleteForever className="text-xl"/>
                    </button>
                }
            </td>
    <td>
        {
            camp.payment_status !=='unpaid'?<button onClick={()=>openModal(camp?._id)} className="btn bg-slate-50">
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