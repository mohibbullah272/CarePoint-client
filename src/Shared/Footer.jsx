import React from "react";
import logo from '../assets/CarePoint-Icon.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=" text-white py-12 px-6 md:px-12"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left - Logo */}
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
              <img src={logo} alt="CarePoint Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-xl font-semibold">Care Point Ltd.</h2>
          </div>
          <p className="mt-2 text-sm text-gray-400 text-center md:text-left">
            Empowering care through innovation
          </p>
        </motion.div>

        {/* Center - Navigation */}
        <motion.nav variants={itemVariants} className="flex justify-center">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white font-medium text-center">
            <li>
              <Link
                to={'/'}
                className="hover:text-[#7e9695] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={'/careBoat'}
                className="hover:text-[#7e9695] transition-colors duration-200"
              >
                Care Bot
              </Link>
            </li>
            <li>
              <Link
                to={'/aboutUs'}
                className="hover:text-[#7e9695] transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={'/support'}
                className="hover:text-[#7e9695] transition-colors duration-200"
              >
                Support
              </Link>
            </li>
          </ul>
        </motion.nav>

        {/* Right - Social Media */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end space-x-6"
        >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaFacebook className="text-2xl hover:text-[#7e9695] transition-colors duration-200" />
            </motion.div>
          </a>
          <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaTwitter className="text-2xl hover:text-[#7e9695] transition-colors duration-200" />
            </motion.div>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaInstagram className="text-2xl hover:text-[#7e9695] transition-colors duration-200" />
            </motion.div>
          </a>
          <a
            href="https://www.linkedin.com/in/mohi-bullah247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaLinkedin className="text-2xl hover:text-[#7e9695] transition-colors duration-200" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400"
      >
        <p>© {new Date().getFullYear()} Care Point Ltd. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;