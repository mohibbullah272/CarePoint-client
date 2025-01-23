import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCamp = () => {
    const {data:camp,isLoading,refetch}=useQuery({
        queryKey:["camp"],
        queryFn:async()=>{
            const {data}=await axios('https://medical-camp-server-theta.vercel.app/all-camp')
            return data
        }
    })
return [camp,isLoading,refetch]
};

export default useCamp;