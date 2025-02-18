import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from "framer-motion";
const Layout = () => {
    useEffect(()=>{
        Aos.init(
        {
            delay:200
        }
        )
        
    },[])
    const location = useLocation()
    const pageVariants = {
        initial: { opacity: 0, x: 50 }, // Slide in from the right
        animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } } // Slide out to the left
      };
      
      
      
    return (
        <div>
            <header className=" w-full fixed top-0 z-50">
               <Navbar></Navbar>
            </header>
            <main className="max-w-7xl mt-20  mx-auto">
            <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;