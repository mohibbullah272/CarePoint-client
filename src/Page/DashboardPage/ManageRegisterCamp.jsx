import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import SharedTitle from "../../Components/SharedTitle";


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
        </div>
    );
};

export default ManageRegisterCamp;