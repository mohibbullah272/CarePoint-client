import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hook/useAxiosPublic";
import toast from "react-hot-toast";

const JoinCampForm = ({camp,close,refetch}) => {
    const {_id,professional_name,camp_name,camp_fee,
      location}=camp ||{}
      const [loading,setLoading]=useState(false)
      const axiosPublic = useAxiosPublic()

 const {user}=useContext(AuthContext)
 const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
    const joiningData = {
        camp_name,
        campId:_id ,
        camp_fee,
        professional_name,
        location,
        email:data?.email,
        name:data?.name,
        age :data?.age,
        gender:data?.gender,
        emergency_contact:data?.emergency_contact,
        phone_number:data?.phone_number,
        confirmation_status:"pending",
        payment_status:"unpaid"

    }
    try{
        setLoading(true)
      await axiosPublic.post('/join-camp',joiningData)
   
    }catch(err){
        toast.error('something went wrong')
    }finally{
        setLoading(false)
        close()
        toast.success('your request is in processing')
        refetch()
    }
  
  }
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Camp Name</span>
          </label>
          <input type="text" {...register('camp_name')} defaultValue={camp_name} className="input cursor-not-allowed w-full input-bordered" readOnly />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Camp Fee</span>
          </label>
          <input type="text" {...register('camp_fee')} defaultValue={camp_fee} className="input  cursor-not-allowed w-full input-bordered" readOnly  />
        </div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Professional Name</span>
          </label>
          <input type="text" {...register('professional_name')} defaultValue={professional_name} className="input w-full input-bordered cursor-not-allowed" readOnly />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" {...register('location')} defaultValue={location} className="input cursor-not-allowed w-full input-bordered" readOnly />
        </div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register('name')} defaultValue={user?.displayName} className="input cursor-not-allowed w-full input-bordered" readOnly />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register('email')} defaultValue={user?.email} className="input cursor-not-allowed  w-full input-bordered" readOnly />
        </div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input type="text" {...register('age')} className="input w-full input-bordered " required />
        </div>
        <div className="form-control w-1/2">
  <label className="label">
    <span className="label-text">Gender</span>
  </label>
  <select {...register('gender')} className="select w-full input-bordered" defaultValue="" required>
    <option disabled  value="">
      Select Gender
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" {...register('phone_number')} className="input  w-full input-bordered" required />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Emergency Contact</span>
          </label>
          <input type="text" {...register('emergency_contact')} className="input  w-full input-bordered" required />
        </div>
    </div>
   
        <div className="form-control mt-6">
        {
            loading?<button><span className="loading loading-spinner loading-xs"></span></button>:<button className="btn primary">Submit</button>
        }
        </div>
      </form>
        </div>
    );
};

export default JoinCampForm;