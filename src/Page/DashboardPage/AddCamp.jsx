import { useContext, useState } from "react";
import SharedTitle from "../../Components/SharedTitle";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { uploadImage } from "../../Hook/imageUpload";
import axios from "axios";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { button } from "@material-tailwind/react";
import toast from "react-hot-toast";
const AddCamp = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [dateTime,setDateTime]=useState(null)
    const [loading,setLoading]=useState(false)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) =>{
        const email = user?.email
        const adminName=user?.displayName
     const camp_name = data?.camp_name
     const camp_fee =data?.camp_fee
     const professional_name = data?.professional_name
     const location =data?.location
     const date_time=dateTime?._d
     const description =data?.description
     const imgFile = data?.image[0]
try{
    setLoading(true)
    const image = await uploadImage(imgFile)
    const campData={
        camp_name,
        camp_fee,
        email,
        adminName,
        professional_name,
        location,
        date_time,
        description,
        image
    }
  const {data} = await axiosSecure.post('/add-camp',campData)
  console.log(data)
  if(data.insertedId){
    toast.success('New Camp uploaded successful')
  }
}catch(err){
    console.log(err)
}
finally{
    setLoading(false)
    reset()
}
      }

    return (
        <div className="text-[#0d0e0e]">
            <SharedTitle title={'Add New Camp'}></SharedTitle>

            <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex gap-5">
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Camp Name</span>
          </label>
          <input type="text" {...register('camp_name')}  placeholder="Camp Name" className="input w-full input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">HealthCare Professional Name</span>
          </label>
          <input type="text" {...register('professional_name')} placeholder="HealthCare Professional Name" className="input w-full input-bordered" required />
        </div>
      </div>
       
      <div className="md:flex gap-5">
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Camp Fees</span>
          </label>
          <input type="number" {...register('camp_fee')}  placeholder="Camp Fees" className="input w-full input-bordered" required />
        </div>
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" {...register('location')} placeholder="Location" className="input w-full input-bordered" required />
        </div>
      </div>
      <div className="md:flex gap-5">
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Chose a Image</span>
          </label>
          <input type="file" {...register('image')} className="w-full  border border-gray-300 bg-white text-gray-700 rounded-lg p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-300" required/>
        </div>
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Date & Time</span>
          </label>
          <Datetime  
          value={dateTime}
          onChange={(date)=>setDateTime(date)}
          className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"/>
        </div>
  
      </div>
     
      <div className="form-control w-full">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input type="text"  placeholder="description" {...register('description')} className="input w-full input-bordered" required />
        </div>
     
        
  
       
        <div className="form-control mt-6">
        {
            loading?<button disabled className="btn "><span className="loading loading-spinner loading-xs"></span></button>:  <button className="btn border-none bg-[#a8bdbc]">Upload</button>
        }
        </div>
      </form>
    </div> 
        </div>
    );
};

export default AddCamp;