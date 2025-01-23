import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoadingPage from "../Page/loading/LoadingPage";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
const {user,loading}=useContext(AuthContext)
if(loading){
    return <LoadingPage></LoadingPage>
}
if(user){
    return children
}
    return (
        <Navigate to={'/joinUs'}></Navigate>
    );
};

export default PrivateRoute;