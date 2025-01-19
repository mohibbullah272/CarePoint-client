import axios from "axios";

const axiosInstancePublic = axios.create({
    baseURL:'http://localhost:8500'
})


const useAxiosPublic = () => {
    return axiosInstancePublic
  
};

export default useAxiosPublic;