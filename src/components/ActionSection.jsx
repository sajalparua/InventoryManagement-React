import { IoMdSearch } from "react-icons/io";
import DashBoard from "../pages/DashBoard";
import StorePage from '../pages/StorePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { useContext } from "react";
import Contex from "../context/Contex";



const ActionSection = () => {
  const {slideMenu,menuStyle} = useContext(Contex)
  return (
    <div className="action-section border1 border-warning1">
      <div className="header border-bottom px-3  ">
        <button onClick={slideMenu} >{menuStyle?<RiMenu3Fill/>:<RiMenu2Fill/>}</button>
        <section className="input-section ms-3">
          <input type="text" className="px-3" />
          <button className="search-btn rounded">
            <IoMdSearch className="icon" />
          </button>
        </section>
        <section className="border ms-auto me-5">
          <div className="user-logo">s</div>
          
        </section>
      </div>
      <Routes>
        <Route path="/dashboard"  element={<DashBoard/>}/>
        <Route path="/"  element={<DashBoard/>}/>
        <Route path="/stores"  element={<StorePage/>}/>
        </Routes>
    </div>
  );
};

export default ActionSection;
