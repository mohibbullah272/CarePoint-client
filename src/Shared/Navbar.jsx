import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const user = false
    const links=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/availableCamp'}>Available Camp</NavLink></li>
    <li><NavLink to={'/joinUs'}>Join Us</NavLink></li>
    </>
    const navEnd= <>
 <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
  {
    user &&     <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
    <li><a>Dashboard</a></li>
    <li><a>Logout</a></li>
  </ul>
  }
    </div>
   
    </>
    return (
        <div className="navbar ">
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
          <Link to={'/'} className="btn btn-ghost text-xl">CarePoint</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            links
           }
          </ul>
        </div>
        <div className="navbar-end">
       {
        navEnd
       }
        </div>
      </div>
    );
};

export default Navbar;