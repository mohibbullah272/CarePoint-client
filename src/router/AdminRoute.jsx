import { useContext } from "react";
import useRoll from "../Hook/useRoll";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingPage from "../Page/loading/LoadingPage";


const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isLoading] = useRoll()
    if(loading || isLoading){
        return <LoadingPage></LoadingPage>
    }
    if(user && isAdmin){
        return children
    }
    return (
<Navigate to={'/dashboard'}></Navigate>
    );
};

export default AdminRoute;