import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://localhost:8500'
})

const useAxiosSecure = () => {
return axiosInstance
};

export default useAxiosSecure;