import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { BsExclamation } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdInsertDriveFile } from "react-icons/md";





const OrederStatusSection = () => {
const [clickButton,setClickButton]= useState(1)


console.log(clickButton);
  return (
<div className="order-status h-100">
    <div className="card p-3 h-100 shadow border-0 position-relative ">
      <h5>Order Status</h5>
      <p className="">Overview Of Latest Montd</p>
      <div className="section-header d-flex justify-content-between ">
        <section className='d-flex'>
          <button title='add' className='me-2'><IoIosAdd className='icon'/>Add</button>
          <button title='details' className='me-2'><BsExclamation/></button>
          <button title='delete' className='me-2'><MdDelete/></button>
          <button title='getfile'><MdInsertDriveFile/></button>
        </section>
        <section className='d-flex justify-content-end '>
            <input type="text" placeholder='search'  className='px-2'/>
          <button><MdInsertDriveFile/></button>
        </section>
      </div>
      <div className="order-list  py-2">
        <table className=''>
          <thead>
            <tr>
            <th>INVOICE</th>
            <th>CUSTOMERS</th>
            <th>FROM</th>
            <th>PRICE</th>
            <th>STATUS</th>
            </tr>
          </thead>
           <tbody>
           <tr>
            <td>1236</td>
            <td>sajal parua</td>
            <td>india</td>
            <td>$299</td>
            <td><section className="bg-danger text-white   rounded">process</section></td>
          </tr>
          <tr>
            <td>1236</td>
            <td>sajal parua</td>
            <td>india</td>
            <td>$299</td>
            <td><section className="bg-success text-white  rounded">open</section></td>
          </tr>
          <tr>
            <td>1236</td>
            <td>sajal parua</td>
            <td>india</td>
            <td>$299</td>
            <td><section className="bg-info text-white  rounded">process</section></td>
          </tr><tr>
            <td>1236</td>
            <td>sajal parua</td>
            <td>india</td>
            <td>$299</td>
            <td><section className="bg-warning text-white  rounded">process</section></td>
          </tr><tr>
            <td>1236</td>
            <td>sajal parua</td>
            <td>india</td>
            <td>$299</td>
            <td><section className="bg-primary  text-white  rounded">process</section></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="controll border2 d-flex align-items-center justify-content-between">
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

</div>  )
}

export default OrederStatusSection