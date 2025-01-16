import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.cofig";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading,setLoading]=useState(true)
const provider = new GoogleAuthProvider()
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
        if(currentUser){
            setUser(currentUser)
        }
        else{
           setUser(null)
        }
        setLoading(false)
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