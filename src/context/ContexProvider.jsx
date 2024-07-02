// import React, { useEffect, useState } from 'react'
// import Contex from './Contex'

//  const ContexProvider = ({children}) => {
//     const [MenuSectionStyle,setMenuSectionStyle]  =useState("col-lg-2")
//     const [ActionSectionStyle,setActionSectionStyle] =useState("col-lg-10") 
//     const [menuStyle,setmenuStyle] = useState("")
  
//   const slideMenu = ()=>{
//     if(ActionSectionStyle=="col-lg-10"){
//       setMenuSectionStyle("left-section")
//       setActionSectionStyle("col-lg-11")
//       setmenuStyle("close-menu")
//     }
//     else{
//       setMenuSectionStyle("col-lg-2")
//       setActionSectionStyle("col-lg-10")
//       setmenuStyle("")
  
//     }
//   }
  
//   return (
//     <Contex.Provider value={{MenuSectionStyle,setMenuSectionStyle,menuStyle,setmenuStyle,ActionSectionStyle,setActionSectionStyle,slideMenu}}>
//         {children}
//     </Contex.Provider>
    
//   )
// }
// export  default ContexProvider