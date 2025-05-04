import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import navIcon from '../assets/CarePoint-Icon.png';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout().then(() => {
      console.log('logout');
    });
  };

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const links = (
    <>
      <motion.li variants={itemVariants}>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-[#7e9695] text-white"
                : "text-gray-800 hover:bg-[#7e9695]/10"
            }`
          }
          to={'/'}
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={itemVariants}>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-[#7e9695] text-white"
                : "text-gray-800 hover:bg-[#7e9695]/10"
            }`
          }
          to={'/availableCamp'}
        >
          Available Camp
        </NavLink>
      </motion.li>
      {!user && (
        <motion.li variants={itemVariants}>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-[#7e9695] text-white"
                  : "text-gray-800 hover:bg-[#7e9695]/10"
              }`
            }
            to={'/joinUs'}
          >
            Join Us
          </NavLink>
        </motion.li>
      )}
      <motion.li variants={itemVariants}>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-[#7e9695] text-white"
                : "text-gray-800 hover:bg-[#7e9695]/10"
            }`
          }
          to={'/support'}
        >
          Support
        </NavLink>
      </motion.li>
      <motion.li variants={itemVariants}>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-[#7e9695] text-white"
                : "text-gray-800 hover:bg-[#7e9695]/10"
            }`
          }
          to={'/careBoat'}
        >
          Care Bot
        </NavLink>
      </motion.li>
    </>
  );

  const navEnd = (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 rounded-full overflow-hidden"
        >
          {user ? (
            <img
              alt="user"
              className="object-cover"
              referrerPolicy="no-referrer"
              src={user?.photoURL}
            />
          ) : (
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/metro/26/user-male-circle.png"
              alt="user-male-circle"
            />
          )}
        </motion.div>
      </div>
      {user && (
        <motion.ul
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-gray-100"
        >
          <li>
            <Link to={'/dashboard/profile'} className="hover:bg-[#7e9695]/10">
              Dashboard
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="hover:bg-[#7e9695]/10">
              Logout
            </button>
          </li>
        </motion.ul>
      )}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar bg-white/30 backdrop-blur-lg max-w-7xl mx-auto sticky top-0 z-50"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </motion.svg>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                variants={navVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-64 p-4 shadow-lg border border-gray-100"
              >
                {links}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-4">
          <Link to={'/'} className="btn btn-ghost text-xl">
            <motion.img
              src={navIcon}
              className="w-10 h-10"
              alt="CarePoint Logo"
              whileHover={{ scale: 1.1 }}
            />
            CarePoint
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <motion.ul
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="menu menu-horizontal hidden lg:flex items-center px-1 gap-2"
        >
          {links}
        </motion.ul>
        {navEnd}
      </div>
    </motion.nav>
  );
};

export default Navbar;