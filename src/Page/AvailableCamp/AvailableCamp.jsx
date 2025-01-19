
import React, { useState } from 'react';
import CampCard from '../../Components/CampCard';
import { FaTh } from 'react-icons/fa';
import useAvailableCampApi from '../../Hook/useAvailableCampApi';
import LoadingPage from '../loading/LoadingPage';
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";

const AvailableCamp = () => {
  const [layout,setLayout]=useState(false)
  const [search,setSearch]=useState('')
  const [sort,setSort]=useState('')
const [camps,isLoading]=useAvailableCampApi(search,sort)

if(isLoading){
  return <LoadingPage></LoadingPage>
}
    return (
        <div>
      <div className="flex flex-wrap justify-between items-center p-4 bg-white border-b">
  
      <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
  <div className="relative w-full md:w-auto">
    <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
    <CiSearch />
    </span>
    <input
      type="text"
      placeholder="Search..."
      onBlur={(e)=>setSearch(e.target.value)}
      className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg w-full md:w-auto"
    />
 
    <span onClick={()=>setSearch('')} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
    <MdClear />
    </span>
  </div>


  <select
  onChange={(e)=>setSort(e.target.value)}
    className="p-2 border border-gray-300 rounded-lg w-full md:w-auto"
    defaultValue=""
  >
    <option value="" disabled>
      Select Sorting Option
    </option>
    <option value="mostRegister">Most Registered</option>
    <option value="campFees">Camp Fees</option>
    <option value="asc">Ascending Order</option>
  </select>
</div>



  <div className="lg:flex hidden items-center gap-4 mt-4 md:mt-0">
    <button onClick={()=>setLayout(!layout)} className="p-2 border border-gray-300 rounded-lg">
      <FaTh size={20} />
    </button>
  </div>
</div>



            <div className={`grid ${layout?'lg:grid-cols-2':'lg:grid-cols-3'} md:grid-cols-2 grid-cols-1 gap-5  p-10`}>
                {
                    camps?.map(camp=> <CampCard key={camp?._id} camp={camp}></CampCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCamp;