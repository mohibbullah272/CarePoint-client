import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Layout = () => {
    return (
        <div>
            <header>
               <Navbar></Navbar>
            </header>
            <main className="max-w-7xl  mx-auto">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Layout;