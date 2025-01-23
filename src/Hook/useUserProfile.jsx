import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const useUserProfile = () => {
    const {user}=useContext(AuthContext)
    const {data:profile,isLoading,refetch}=useQuery({
        queryKey:["userProfiles",user?.email],
        queryFn:async()=>{
            const {data}= await axios(`https://medical-camp-server-theta.vercel.app/user-profile?email=${user?.email}`)
            return data
        }
    })
    return [profile,isLoading,refetch]
};

export default useUserProfile;