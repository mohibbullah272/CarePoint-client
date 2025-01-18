import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import CampCard from '../../Components/CampCard';
import { FaTh } from 'react-icons/fa';

const AvailableCamp = () => {
  const [layout,setLayout]=useState(false)
  const [search,setSearch]=useState('')
  const [sort,setSort]=useState('')
    const {data:camps}=useQuery({
        queryKey:["availableCamps",search,sort],
        queryFn:async()=>{
            const {data} = await axios(`http://localhost:8500/available-camp?search=${search}&&sort=${sort}`)
            return data
        }
    })

    return (
        <div>
      <div className="flex flex-wrap justify-between items-center p-4 bg-white border-b">
  
  <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
   
    <input
      type="text"
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search..."
      className="p-2 border border-gray-300 rounded-lg w-full md:w-auto"
    />

   
    <select
    onChange={(e)=>setSort(e.target.value)}
      className="p-2 border border-gray-300 rounded-lg w-full md:w-auto"
      defaultValue=""
    >
      <option value="" disabled>
        Select Sorting Option
      </option>
      <option value="mostRegister">Most Registered</option>
      <option value="campFees">camp fees</option>
      <option value="asc">Ascending order</option>
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