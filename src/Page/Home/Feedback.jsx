import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import FeedbackCard from "../../Components/FeedbackCard";


const Feedback = () => {
    const axiosPublic = useAxiosPublic()
    const {data:feedbacks}=useQuery({
        queryKey:['feedback'],
        queryFn:async()=>{
            const {data} = await axiosPublic('/feedbacks')
            return data
        }
    })
    return (
       <div className="my-20">
        <h3 className="text-3xl text-center text-black">What Our Customers Say</h3>
         <div data-aos="flip-left" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:p-10 gap-5">
            {
                feedbacks?.map(feedback=><FeedbackCard key={feedback._id} feedbackData={feedback}></FeedbackCard>)
            }
        </div>
       </div>
    );
};

export default Feedback;