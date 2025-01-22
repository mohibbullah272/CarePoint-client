import { useNavigate, useParams } from "react-router-dom";
import SharedTitle from "../../Components/SharedTitle";
import Datetime from "react-datetime";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const UpdateCamp = () => {
    const {id}=useParams()
    const axiosSecure = useAxiosSecure()
    const {user}=useContext(AuthContext)
    const {data:campDataOld={},isLoading}=useQuery({
        queryKey:['updateCamp',id],
        queryFn:async()=>{
            const {data} = await axiosSecure(`/updateCamp/${id}`)
            return data
        }
    })
  const navigate= useNavigate()
    const [dateTime,setDateTime]=useState(null)

        const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
     
      const onSubmit = async(data)=>{
        const updateInfo={
           email : user?.email,
           adminName:user?.displayName,
       camp_name : data?.camp_name,
       camp_fee :data?.camp_fee,
      professional_name : data?.professional_name,
       location :data?.location,
       date_time:dateTime?._d,
        description :data?.description,
       image : data?.image,
       participant_count :campDataOld?.participant_count

        }
        const {data:info}= await axiosSecure.patch(`/updateCamp/${id}`,updateInfo)
       if(info.modifiedCount){
        toast.success('camp details updated')
        navigate('/dashboard/manageCamp')

       }
      
      }
    return (
        <div>
            <SharedTitle title={'Update Camp'}></SharedTitle>
                <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex gap-5">
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Camp Name</span>
          </label>
          <input defaultValue={campDataOld?.camp_name} type="text" {...register('camp_name')}  placeholder="Camp Name" className="input w-full input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">HealthCare Professional Name</span>
          </label>
          <input defaultValue={campDataOld?.professional_name} type="text" {...register('professional_name')} placeholder="HealthCare Professional Name" className="input w-full input-bordered" required />
        </div>
      </div>
       
      <div className="md:flex gap-5">
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Camp Fees</span>
          </label>
          <input defaultValue={campDataOld?.camp_fee} type="number" {...register('camp_fee')}  placeholder="Camp Fees" className="input w-full input-bordered" required />
        </div>
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input defaultValue={campDataOld?.location} type="text" {...register('location')} placeholder="Location" className="input w-full input-bordered" required />
        </div>
      </div>
      <div className="md:flex gap-5">
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Chose a Image</span>
          </label>
       
        <input type="text" defaultValue={campDataOld?.image} className="input w-full input-bordered" {...register('image')} required  />
        </div>
      <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Date & Time</span>
          </label>
          <Datetime  
       value={campDataOld.date_time || dateTime}
          onChange={(date)=>setDateTime(date)}
          className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"/>
        </div>
  
      </div>
     
      <div className="form-control w-full">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input type="text" defaultValue={campDataOld?.description} placeholder="description" {...register('description')} className="input w-full input-bordered" required />
        </div>
     
        
  
       
        <div className="form-control mt-6">
       <button className="btn border-none bg-[#a8bdbc]">Update</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateCamp;