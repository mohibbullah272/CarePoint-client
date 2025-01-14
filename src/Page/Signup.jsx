import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Signup = () => {
        const [showPass,setShowPass]=useState(false)
    return (
        <div className="min-h-[calc(100vh-68px)] flex flex-col items-center justify-center relative" style={{
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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text font-semibold">Chose your image</span>
  </div>
  <input type="file" className="file-input border-none w-full max-w-xs" />
</label>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type={showPass?'text':'password'} placeholder="password" className="input input-bordered" required />
              <div onClick={()=>setShowPass(!showPass)} className="absolute top-12 right-4">
                  {
                      showPass?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                  }
                 </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn secondary">Sign up</button>
        </div>
        <div className="divider">or</div>
        <div className="flex text-left items-center  btn btn-outline">
        <img width="30" height="30"  className="ml-20" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
        <p>sign up with Google</p>
        </div>
      </form>
      <p className="p-7">Already have an account? <Link to={'/login'} className="underline">login now</Link></p>
    </div>
        </div>
    );
};

export default Signup;