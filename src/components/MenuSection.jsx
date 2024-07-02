import React, { useContext, useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbBrandShazam } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { FaStore } from "react-icons/fa6";
import { CgAttribution } from "react-icons/cg";
import { FaProductHunt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Contex from "../context/Contex";
import { Link } from "react-router-dom";



const MenuSection = () => {
  const {menuStyle} = useContext(Contex)
  
  const [menuListOpt, setMenuListOpt] = useState([
    {optionName:"Dashboard", icon:MdSpaceDashboard,active:false},
    {optionName:"Users", icon:LuUsers,active:false},
    {optionName:"Groups", icon:FaPeopleGroup,active:false},
    {optionName:"Brands", icon:TbBrandShazam,active:false},
    {optionName:"Category", icon:MdCategory,active:false},
    {optionName:"Stores", icon:FaStore,active:false},
    {optionName:"Attributes", icon:CgAttribution,active:false},
    {optionName:"Products", icon:FaProductHunt,active:false},
    {optionName:"Orders", icon:FaCartShopping,active:false},
    {optionName:"Company", icon: IoGitNetworkSharp,active:false},
    {optionName:"Profile", icon:FaUserGear,active:false},
    {optionName:"Setting", icon:IoSettingsSharp,active:false},
    {optionName:"Logout", icon:FiLogOut,active:false} ]);


    const activeLink = (index) =>{
      let newMenu = menuListOpt.map((item, idx) => ({
        ...item,
        active: idx === index, 
      }));
      setMenuListOpt(newMenu);
    }
    console.log(menuStyle);


  return (
    <div className="menu-section  shadow">
      <div className="comany-tittle">
        <h3>patrasonic</h3>
      </div>
      <div className="menu-list  ">
        <ul className="list-unstyled ">
          {menuListOpt.map((element, index) => {
            let Icon = element.icon
            let liStyle = (element.active==true)?"active-li":"";
            let ancherStyle = (element.active==true)?"active-a":"";
            return (
              <li key={index}  className={liStyle+" " +"px-4 my-2 py-2 "} >
                <Link className={ancherStyle+"link"}  to={"/" + element.optionName.toLowerCase() }  onClick={()=>activeLink(index)}>
                  <Icon className={ancherStyle+" "+"menu-icon me-2"}/>
                 <p className={menuStyle+" "+" m-0"}>{element.optionName}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuSection;
