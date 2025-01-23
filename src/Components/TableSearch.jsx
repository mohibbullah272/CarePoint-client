import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdClear } from 'react-icons/md';

const TableSearch = () => {
    const [search , setSearch]=useState('')
    return (
      <div className="relative w-full">
    <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
    <CiSearch />
    </span>
    <input
      type="text"
      placeholder="Search..."
      onBlur={(e)=>setSearch(e.target.value)}
      className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg w-full"
    />
 
   
  </div>

    );
};

export default TableSearch;