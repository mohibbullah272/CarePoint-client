import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {loginWithGoogle}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
           toast.success('Sign in successfull')
           navigate('/')
        })
        .catch(err=>{
        toast.error('someting went wrong !!')
        })
    }
    return (
     
   <button onClick={handleLogin} className="btn text-center btn-outline w-full">
   <p className='flex justify-center items-center gap-3'><FaGoogle></FaGoogle>sign up with Google</p>
   </button>
     
    );
};

export default SocialLogin;