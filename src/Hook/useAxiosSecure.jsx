import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL:'http://localhost:8500'
})

const useAxiosSecure = () => {
    const {logout}=useContext(AuthContext)
    const navigate= useNavigate()
axiosInstance.interceptors.request.use((config)=>{
const token = localStorage.getItem('access-token')
config.headers.authorization=`Bearer ${token}`
return config
},(err)=>{
    return Promise.reject(err)
})
axiosInstance.interceptors.response.use(res=>{
    return res
},async(error)=>{
    const status = error.response.status;
    if(status === 401 || status === 403){
       await logout()
        navigate('/joinUs')
    }
    return Promise.reject(error)
})

return axiosInstance
};

export default useAxiosSecure;