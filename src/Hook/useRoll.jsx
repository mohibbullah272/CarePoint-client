import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useRoll = () => {
    const {user}=useContext(AuthContext)
    const {data:isAdmin,isLoading}=useQuery({
        queryKey:["isAdmin",user?.email],
        queryFn:async()=>{
            const {data} = await axios(`https://medical-camp-server-theta.vercel.app/admin/${user?.email}`)
            return data
        }
    })
    return [isAdmin,isLoading]
};

export default useRoll;