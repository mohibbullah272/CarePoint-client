import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAvailableCampApi = (search,sort) => {
    const {data:camps,isLoading,refetch}=useQuery({
        queryKey:["availableCamps",search,sort],
        queryFn:async()=>{
            const {data} = await axios(`http://localhost:8500/available-camp?search=${search}&&sort=${sort}`)
            return data
        }
    })
return [camps,isLoading,refetch]
};

export default useAvailableCampApi;