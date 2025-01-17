import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCamp = () => {
    const {data:camp,isLoading}=useQuery({
        queryKey:["camp"],
        queryFn:async()=>{
            const {data}=await axios('http://localhost:8500/all-camp')
            return data
        }
    })
return [camp,isLoading]
};

export default useCamp;