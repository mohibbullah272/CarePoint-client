import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { uploadImage } from "../Hook/imageUpload";
import SocialLogin from "../Shared/SocialLogin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Signup = () => {
        const [showPass,setShowPass]=useState(false)
        const [loading,setLoading]=useState(false)
        const navigate= useNavigate()
        const {register:signUpWithEmail,updateUser}=useContext(AuthContext)
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()
        const onSubmit = async(data) => {
          const name = data?.name;
          const email = data?.email;
          const imageFile = data?.image[0]
          const password = data?.password
        try{
          setLoading(true)
          const image = await uploadImage(imageFile)
         const result=await signUpWithEmail(email,password)
         console.log(result)
         const updateUserProfile= await updateUser(name,image)
         console.log(updateUserProfile)
        }
         catch(err){
        toast.error('something went wrong !!')
         }
         finally{
          setLoading(false)
          toast.success('Login successfuly complete')
          navigate('/')
         } 
        }

    return (
        <div className="min-h-[calc(100vh-68px)] p-10 flex flex-col items-center justify-center relative" style={{
            background:`url("https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            backgroundPosition:'cover',
            backgroundSize:'cover',
            objectFit:'cover'
        }}>
            <div className="absolute  inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div>
                <h3 className="text-2xl relative mb-10 text-center text-white">Join Us Today</h3>
            </div>
            <div className="bg-white/20 backdrop-blur-2xl mx-auto  w-full max-w-sm  ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input {...register('name')} type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text font-semibold">Chose your image</span>
  </div>
  <input {...register('image')} type="file" className="file-input border-none w-full max-w-xs" />
</label>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input {...register('email')} type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input {...register('password')} type={showPass?'text':'password'} placeholder="password" className="input input-bordered" required />
              <div onClick={()=>setShowPass(!showPass)} className="absolute top-12 right-4">
                  {
                      showPass?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                  }
                 </div>
        </div>
        <div className="form-control mt-6">
      {
        loading?<button  className="btn w-full"><span className="loading loading-spinner  loading-xs"></span></button>:    <button className="btn secondary">Sign up</button>
      }
        </div>
        <div className="divider">or</div>
     <SocialLogin></SocialLogin>
      </form>
      <p className="p-7">Already have an account? <Link to={'/joinUs'} className="underline">login now</Link></p>
    </div>
        </div>
    );
};

export default Signup;
