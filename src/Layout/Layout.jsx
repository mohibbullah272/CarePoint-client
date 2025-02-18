import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Layout = () => {
    useEffect(()=>{
        Aos.init(
        {
            delay:200
        }
        )
        
    },[])
    return (
        <div>
            <header className=" w-full fixed top-0 z-50">
               <Navbar></Navbar>
            </header>
            <main className="max-w-7xl   mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;