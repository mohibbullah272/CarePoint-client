import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import navIcon from '../assets/CarePoint-Icon.png'
import './Navbar.css'
const Navbar = () => {
   const {user,logout}=useContext(AuthContext)
   const handleLogout=()=>{
    logout()
    .then(()=>{
      console.log('logout')
    })
   }
    const links=<>
    <li><NavLink  to={'/'}>Home</NavLink></li>
    <li><NavLink  to={'/availableCamp'}>Available Camp</NavLink></li>
   {
    !user&& <li><NavLink  to={'/joinUs'}>Join Us</NavLink></li>
   }
    <li><NavLink  to={'/support'}>Support</NavLink></li>
    <li><NavLink  to={'/careBoat'}>Care bot</NavLink></li>
    </>
    const navEnd= <>
 <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
     {
      user?     <img
      alt="user"
      className="object-cover"
      referrerPolicy="no-referrer"
      src={user?.photoURL} />:<img width="26" height="26" src="https://img.icons8.com/metro/26/user-male-circle.png" alt="user-male-circle"/>
     }
        </div>
      </div>
  {
    user &&     <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
   
    <li><Link to={'/dashboard/profile'}>Dashboard</Link></li>
    <li><a onClick={handleLogout}>Logout</a></li>
  </ul>
  }
    </div>
   
    </>
    return (
        <div className="navbar  bg-white/30 backdrop-blur-lg max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {
                links
            }
       
            </ul>
          </div>
     <div className="flex items-center gap-4">
     <Link to={'/'} className="btn btn-ghost text-xl">  
          <img src={navIcon} className="w-10 h-10" alt="" />
          CarePoint</Link>
     </div>
        </div>
      
    
        <div className="navbar-end ">
        <ul className="menu menu-horizontal hidden lg:flex items-center px-1">
           {
            links
           }
          </ul>
       {
        navEnd
       }
        </div>
      </div>
    );
};

export default Navbar;