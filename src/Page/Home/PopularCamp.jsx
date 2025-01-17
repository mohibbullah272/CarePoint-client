import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CampCard from "../../Components/CampCard";

const PopularCamp = () => {
    const {data:camps}=useQuery({
        queryKey:['popularCamp'],
        queryFn:async()=>{
            const {data} = await axios(`http://localhost:8500/popularCamp`)
            return data
        }
    })
    return (
        <div className="my-20">
            <h3 className="text-3xl text-gray-900 text-center ">Popular Camps</h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5">
                {
                    camps?.map(camp=> <CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>
        </div>
    );
};

export default PopularCamp;