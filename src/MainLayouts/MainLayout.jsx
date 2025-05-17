import React from "react";
import Navbar from '../SharedFile/Navbar'
import { Outlet } from "react-router-dom";
import Footer from "../SharedFile/Footer";


const MainLayout = () => {
  return (
    <div>
     <div className="px-4 md:px-0"></div>
      <Navbar></Navbar>
      <div className='py-2 bg-gradient-to-r from-[#fbeeed] to-white'>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
