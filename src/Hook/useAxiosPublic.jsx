import axios from "axios";

const axiosInstancePublic = axios.create({
    baseURL:'https://medical-camp-server-theta.vercel.app'
})


const useAxiosPublic = () => {
    return axiosInstancePublic
  
};

export default useAxiosPublic;