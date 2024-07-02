import { IoMdSearch } from "react-icons/io";
import DashBoard from "../pages/DashBoard";
import StorePage from '../pages/StorePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { useSelector ,useDispatch } from "react-redux";
import {slideMenu} from '../ReduxTool/MenuStyleSlice';
import Users from "../pages/Users";
import { ProductPage } from "../pages/ProductPage";



const ActionSection = () => {
  const dispatch = useDispatch()
  const {menuStyle} = useSelector((state)=>state.menuStyle)
  console.log("dhich kao");
  return (
    <div className="action-section border1 border-warning1">
      <div className="header border-bottom px-3 py-1  ">
        <button onClick={()=>dispatch(slideMenu())} >{menuStyle?<RiMenu3Fill/>:<RiMenu2Fill/>}</button>
        <section className="input-section ms-3">
          <input type="text" className="px-3" />
          <button className="search-btn rounded">
            <IoMdSearch className="icon" />
          </button>
        </section>
        <section className=" ms-auto me-5">
          <div className="user-logo">s</div>
          
        </section>
      </div>
      <Routes>
        <Route path="/dashboard"  element={<DashBoard/>}/>
        <Route path="/"  element={<DashBoard/>}/>
        <Route path="/stores"  element={<StorePage/>}/>
        <Route path="/users"  element={<Users/>}/>
        <Route path="/products"  element={<ProductPage/>}/>
        </Routes>
    </div>
  );
};

export default ActionSection;
