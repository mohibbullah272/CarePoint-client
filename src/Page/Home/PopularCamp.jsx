import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CampCard from "../../Components/CampCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PopularCamp = () => {
    const {data:camps}=useQuery({
        queryKey:['popularCamp'],
        queryFn:async()=>{
            const {data} = await axios(`https://medical-camp-server-theta.vercel.app/popularCamp`)
            return data
        }
    })
    return (
        <div className="my-20">
            <h3 className="text-3xl text-gray-900 text-center ">Popular Camps</h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 p-5">
                {
                    camps?.map(camp=> <CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>
            <div className="flex justify-end">
                <Link to={'/availableCamp'}>
                <button className="btn underline  accent">See More <FaArrowRight></FaArrowRight></button>
                </Link>
            </div>
        </div>
    );
};

export default PopularCamp;