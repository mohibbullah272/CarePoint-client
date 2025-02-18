import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import SocialLogin from "../Shared/SocialLogin";
import bg from '../assets/login-bg.png'
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
const JoinUs = () => {
        const [showPass,setShowPass]=useState(false)
        const [opened, { open, close }] = useDisclosure(false);
        const {login}=useContext(AuthContext)
        const [adminAuth,setAdminAuth]=useState(false)
        const navigate = useNavigate()
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
          const onSubmit = (data) => {
            const email = data?.email
            const password= data?.password
            
            login(email,password)
            .then(result=>{
             toast.success('login successful')
             navigate('/')
            })
            .catch(err=>{
              console.log(err)
           toast.error('something went wrong !!')
            })
          }
          const handleAdminLogin = ()=>{
            open()
            setAdminAuth(true)
            
          }
          const copyToClipboard = (text) => {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            toast.success("Copied to clipboard!");
          };
    return (
        <div className="min-h-screen flex flex-col items-end justify-center p-10 " style={{
            background:`url(${bg})`,
            backgroundPosition:'cover',
            backgroundSize:'cover',
            objectFit:'cover'
        }}>
          
          <Modal opened={opened} onClose={close} title="Admin Credential">
      <div className="flex items-center justify-between p-2 border-b">
        <p>Admin Email: <span className="font-semibold">mrzero1@gmail.com</span></p>
        <button 
          onClick={() => copyToClipboard("mrzero1@gmail.com")} 
          className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Copy
        </button>
      </div>

      <div className="flex items-center justify-between p-2">
        <p>Admin Pass: <span className="font-semibold">asdf123</span></p>
        <button 
          onClick={() => copyToClipboard("asdf123")} 
          className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Copy
        </button>
      </div>
    </Modal>
            <div>
                <h3 className="text-3xl mr-20 my-5  text-black">Welcome Back!</h3>
            </div>
            <div className="bg-white/20 backdrop-blur-xl   w-full max-w-sm ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  placeholder="email" {...register('email')} className="input input-bordered" required />
          
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register('password')}  type={showPass?'text':'password'} placeholder="password" className="input input-bordered" required />
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
      <SocialLogin></SocialLogin>
      <div className="divider">~~~~</div>
      <div>
  <p   onClick={handleAdminLogin}  className="flex items-center gap-2 btn ">Login as a Admin <FaUserAlt></FaUserAlt></p>
      </div>
      </form>
      <p className="p-7">New here? <Link to={'/signup'} className="underline">Create a new account</Link></p>
    </div>
        </div>
    );
};

export default JoinUs;