import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import svg from '../../assets/hand-holding-medical.svg'
import useRoll from "../../Hook/useRoll";
import LoadingPage from "../../Page/loading/LoadingPage";
const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin,isLoading]=useRoll()
if(isLoading){
  return <LoadingPage></LoadingPage>
}

  return (
    <div className="min-h-screen text-[#0d0e0e] bg-[#fafafa] flex relative">
      {/* Sidebar */}
      
      <div
        className={`fixed top-0 min-h-screen left-0  w-64  bg-base-300  z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/4`}
      >
<div className="flex items-center justify-center mb-5 gap-4">
     <Link to={'/'} className="btn  btn-ghost text-xl">  
          <img src={svg} className="w-8 h-8" alt="" />
          CarePoint</Link>
     </div>
        <ul className="space-y-4 p-3 ">
            {/* admin route */}
           {
            isAdmin?<>
             <li>
            <NavLink to={"/dashboard/Profile"}>Profile</NavLink>
          </li>
            <li><NavLink to={'/dashboard/addCamp'}>Add A Camp</NavLink></li>
            <li><NavLink to={'/dashboard/manageCamp'}>Manage Camps</NavLink></li>
            <li><NavLink to={'/dashboard/manage-register-camp'}>Manage Registered Camps </NavLink></li>
            
            </>:
            // user route
            <>
            <li><NavLink>Analytics</NavLink></li>
            <li><NavLink>Profile</NavLink></li>
            <li><NavLink to={'/dashboard/register-camp'}>Registered Camps</NavLink></li>
            <li><NavLink to={'/dashboard/payment-history'}>Payment History</NavLink></li>
            </>
           }
           <div className="divider">~~~</div>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Available Camp</NavLink>
          </li>
          <li>
            <NavLink to={"/settings"}>Terms & condition</NavLink>
          </li>
 
        </ul>
      </div>

  
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

   
      <div className="flex-1 md:w-4/5 md:p-5 p-2">
    
        <button
          className="md:hidden   p-2 rounded mb-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
     <RxHamburgerMenu />
        </button>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
