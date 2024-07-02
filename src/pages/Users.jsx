import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { GrView } from "react-icons/gr";



const Users = () => {
    const uselist = ["nmasram nita bol","gopi clander go","chandan chimuk","nmasram nita bol","gopi clander go","chandan chimuk","nmasram nita bol","gopi clander go"]
    const [clickButton,setClickButton]= useState(1)

  return (
    <div className="users ">
        <div className="container">
            <h2>users</h2>
            <div className="row">
                <div className="col-lg-4">
                    <section className='d-flex'> <input placeholder='search users' type="text" />
                    <button>search</button></section>
                    </div>
           </div>
           <div className="user-list pt-4">
            <div className="row">
                <div className="col-lg-12 " >
                    <div className='list'>
                    <table className='w-100'>
                <thead>
                    <tr>
                        <th>full name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>adress</th>
                        <th>role</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {uselist.map((ele)=>{
                        return <tr key={ele} >
                        <td>{ele}</td>
                        <td>sajalparua320@gmail.com </td>
                        <td>7797777352</td>
                        <td>salesManagerbetulia chaklalpur, lalpur</td>
                        <td>salesManager </td>
                        <td className='d-flex'> <button title='view'><GrView/></button> <button title='edite'><CiEdit/></button> <button title='delete'><MdDeleteOutline/></button> </td>
                    </tr>  
                    })}
                    
                </tbody>

            </table>
                    </div>
                

                </div>
                <div className="col-lg-12">
                <div className="controll border2 d-flex align-items-center justify-content-between my-2">
          <p className='m-0'>showing 1 to 20 of 20 entries</p>
          <div className="switch-page d-flex">
            <button>{"<"}</button>
            <button onClick={()=>setClickButton(1)} className={clickButton==1?"active":""}>1</button>
            <button onClick={()=>setClickButton(2)} className={clickButton==2?"active":""}>2</button>
            <button onClick={()=>setClickButton(3)} className={clickButton==3?"active":""}>3</button>
            <button onClick={()=>setClickButton(4)} className={clickButton==4?"active":""}>4</button>
            <button onClick={()=>setClickButton(5)} className={clickButton==5?"active":""}>5</button>
            <button onClick={()=>setClickButton(6)} className={clickButton==6?"active":""}>6</button>
            <button >{">"}</button>
          </div>
        </div> 
                </div>
            </div>
            

           </div>
           

        </div>

    </div>
  )
}

export default Users