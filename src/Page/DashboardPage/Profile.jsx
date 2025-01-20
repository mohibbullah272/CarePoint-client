import useUserProfile from "../../Hook/useUserProfile";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoBagSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useForm } from "react-hook-form";
import { FaHeart } from "react-icons/fa";
import LoadingPage from "../loading/LoadingPage";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const Profile = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const axiosSecure = useAxiosSecure()
    const [profile,isLoading,refetch]=useUserProfile()
  
    console.log(profile)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) =>{
        const updateData ={
            name : data?.name,
             email : data?.email ,
           photo: data?.photo,
           role :profile?.role,
           additional :{
              company:data?.company,
              relation :data?.relation,
              phone:data?.phone,
              location:data?.location
            }
        }

     await axiosSecure.put(`/update-profile/${profile?.email}`,updateData)
      refetch()
      close()
      }
      if(isLoading){
        return <LoadingPage></LoadingPage>
    }
    return (
        <div>
            <Modal opened={opened} onClose={close} title="Profile Update">
            <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-5 ">
      <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register('name')} defaultValue={profile?.name} placeholder="Name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input type="email" {...register('email')} defaultValue={profile?.email} className="w-full input input-bordered" readOnly />
     
        </div>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" {...register('photo')} defaultValue={profile?.photo} className="input input-bordered" readOnly />
     
        </div>
        <div className="divider">Additional</div>
        <div className="flex gap-5 ">
      <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text"  {...register('location')} defaultValue={profile?.additional?.location} placeholder="location" className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
        <label className="label">
    <span className="label-text">Relationship Status</span>
  </label>
  <select {...register('relation')} defaultValue={profile?.additional?.relation} className="select select-bordered">
    <option value="single">Single</option>
    <option value="in_a_relationship">In a Relationship</option>
    <option value="married">Married</option>
    <option value="divorced">Divorced</option>
    <option value="widowed">Widowed</option>
  </select>
     
        </div>
      </div>
        <div className="flex gap-5 ">
      <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input defaultValue={profile?.additional?.phone} type="number" {...register('phone')}  placeholder="Phone Number" className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
        <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input type="text" defaultValue={profile?.additional?.company} {...register('company')} placeholder="Company Name" className="input input-bordered w-full" required />
     
        </div>
      </div>
        <div className="form-control mt-6">
          <button className="btn primary">Update</button>
        </div>
      </form>
            </Modal>
        <div className="bg-[#8fb0ae8c] relative flex flex-col w-full items-center">
            <p className="text-white absolute top-2 right-2 rounded-3xl p-1 bg-stone-500/30">{profile?.role}</p>
   <div className="relative border-4 mt-10 p-2 rounded-full">
    <img src={profile?.photo} className="rounded-full" alt="user" />
    <button onClick={open} className="absolute bottom-2 right-0 text-2xl text-gray-900"><FaEdit /></button>
   </div>
   <div className="text-center space-y-2 ">
    <p className="text-white text-xl">{profile?.name}</p>
    <p className="text-white ">{profile?.email}</p>
   </div>
   {
    profile?.additional&& <div className="mt-4  p-3">
    <h3 className="text-2xl text-white font-semibold">--Additional Information--</h3>
    <ul className="mt-4">
        <li className="flex items-center gap-3"><IoBagSharp /> {profile?.additional?.company} </li>
        <li className="flex items-center gap-3"><FaLocationDot /> {profile?.additional?.location} </li>
        <li className="flex items-center gap-3"><BsFillTelephoneFill /> {profile?.additional?.phone} </li>
        <li className="flex items-center gap-3"><FaHeart></FaHeart> {profile?.additional?.relation} </li>
    </ul>
   </div>
   }
   
        </div>
        </div>
    );
};

export default Profile;