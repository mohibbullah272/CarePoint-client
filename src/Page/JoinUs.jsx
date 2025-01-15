import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const JoinUs = () => {
        const [showPass,setShowPass]=useState(false)
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
          const onSubmit = (data) => console.log(data)

    return (
        <div className="min-h-[calc(100vh-68px)] flex flex-col items-center justify-center relative" style={{
            background:`url("https://images.pexels.com/photos/8413190/pexels-photo-8413190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            backgroundPosition:'cover',
            backgroundSize:'cover',
            objectFit:'cover'
        }}>
            <div className="absolute  inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="relative">
                <h3 className="text-3xl my-5 text-center ">Welcome Back!!</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-xl mx-auto  w-full max-w-sm  ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register('email')} className="input input-bordered" required />
          
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register('password')} type={showPass?'text':'password'} placeholder="password" className="input input-bordered" required />
       <div onClick={()=>setShowPass(!showPass)} className="absolute top-12 right-4">
        {
            showPass?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
        }
       </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn secondary">Sign in</button>
        </div>
        <div className="divider">or</div>
        <div className="flex text-left items-center  btn btn-outline">
        <img width="30" height="30"  className="ml-20" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
        <p>Login with Google</p>
        </div>
      </form>
      <p className="p-7">New here? <Link to={'/signup'} className="underline">Create a new account</Link></p>
    </div>
        </div>
    );
};

export default JoinUs;