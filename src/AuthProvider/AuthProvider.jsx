import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.cofig";
import axios from "axios";
import useAxiosPublic from "../Hook/useAxiosPublic";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading,setLoading]=useState(true)
const provider = new GoogleAuthProvider()
const axiosPublic = useAxiosPublic()
const register = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const login =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const loginWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
const updateUser=async(name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
    })

}
const logout = ()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        if(currentUser?.email){
            setUser(currentUser)
            setLoading(false)

            setTimeout(() => {
                axiosPublic.post(`/add-user/${currentUser?.email}`,{
                    name:currentUser?.displayName,
                    email:currentUser?.email,
                    photo:currentUser?.photoURL,
                    role:"participant"

                })
                .then(res=>console.log(res.data))
            }, 1000);
        }
        else{
           setUser(null)
        }
  
    })
    return ()=>{
        unsubscribe()
    }
},[])


    const authInfo={
        login,
        loginWithGoogle,
        register,
        user,
        loading,
        updateUser,
        logout
    }
    return (
     <AuthContext.Provider value={authInfo}>
{children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;