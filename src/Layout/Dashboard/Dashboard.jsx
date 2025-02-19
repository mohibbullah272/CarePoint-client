import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import svg from '../../assets/CarePoint-Icon.png'
import useRoll from "../../Hook/useRoll";
import LoadingPage from "../../Page/loading/LoadingPage";
import Aos from "aos";
import 'aos/dist/aos.css';
const Dashboard = () => {
    useEffect(()=>{
          Aos.init(
          {
              delay:200
          }
          )
          
      },[])
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin,isLoading]=useRoll()
if(isLoading){
  return <LoadingPage></LoadingPage>
}

  return (
    <div className="min-h-screen text-[#0d0e0e] bg-[#fafafa] flex relative">
      {/* Sidebar */}
      
      <div
        className={`fixed top-0 min-h-screen left-0  w-64  bg-[#a8bdbc80]  z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/4`}
      >
<div className="flex items-center justify-center mb-5 gap-4">
     <Link to={'/'} className="btn  btn-ghost text-xl">  
          <img src={svg} className="w-8 h-8" alt="" />
          CarePoint</Link>
     </div>
     <ul className="space-y-4">
        {/* Admin route */}
        {isAdmin ? (
          <>
            <li>
              <NavLink
                to={"/dashboard/Profile"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/addCamp'}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Add A Camp
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/manageCamp'}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Manage Camps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/manage-register-camp'}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Manage Registered Camps
              </NavLink>
            </li>
          </>
        ) : (
          // User route
          <>
            <li>
              <NavLink
                to={'/dashboard/analytics'}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/profile'}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/register-camp'}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Registered Camps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/payment-history'}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold p-2 text-white"
                    : "text-gray-900 font-bold p-2"
                }
              >
                Payment History
              </NavLink>
            </li>
          </>
        )}

        <div className="divider">~~~</div>

        {/* Common links */}
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "font-bold p-2 text-white"
                : "text-gray-900 font-bold p-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/availableCamp"}
            className={({ isActive }) =>
              isActive
                ? "font-bold p-2 text-white"
                : "text-gray-900 font-bold p-2"
            }
          >
            Available Camp
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/termsAndCondition"}
            className={({ isActive }) =>
              isActive
                ? "font-bold p-2 text-white"
                : "text-gray-900 font-bold p-2"
            }
          >
            Terms & Condition
          </NavLink>
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
