import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {loginWithGoogle}=useContext(AuthContext)
    const handleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div onClick={handleLogin} className="flex text-left items-center  btn btn-outline">
        <img width="30" height="30"  className="ml-20" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
        <p>sign up with Google</p>
        </div>
    );
};

export default SocialLogin;