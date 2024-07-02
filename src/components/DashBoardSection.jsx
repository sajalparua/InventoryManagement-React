import React from 'react'
import AreaChart from "./charts/AreaChart";
import { FaCrown } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";






const DashBoardSection = () => {
  return (
<div className='desh-section h-100'>
<div className="card shadow h-100  p-3 border-0">
            <div className="row">
              <div className="col-lg-4 ">
                <h5 className="m-0">Dashboard</h5>
                <p className="m-0">Overview Of Latest Month</p>
                <div className='my-3'>
                  <h2 className="m-0">$3200.70423</h2>
                  <p>current month earnings</p>
                </div>
                <div className='my-3'>
                  <h2 className="m-0">67</h2>
                  <p>current month sales</p>
                </div >
                <button className='my-3'>laest month summary</button>
              </div>
              <div className="col-lg-8  border1">
                <div className="option-bar d-flex justify-content-between">
                  <ul className="list-unstyled d-flex options">
                    <li className="mx-2">DAILY</li>
                    <li className="mx-2">WEEKLY</li>
                    <li className="mx-2">MONTHLY</li>
                    <li className="mx-2">YEARLY</li>
                  </ul>
                  <section className=''>
                    {/* <ul className="list-unstyled d-flex">
                      <li className="d-flex mx-2 align-items-center">
                        <div className="bluewdot  bg-warning rounded-circle"></div>{" "}
                        <p className="m-0 ms-2 lh-0">Online</p>
                      </li>
                      <li className="d-flex mx-2 align-items-center">
                        <div className="yellowdot  bg-success rounded-circle "></div>{" "}
                        <p className="m-0 ms-2 lh-0">Store</p>
                      </li>
                    </ul> */}
                  </section>
                </div>
                <AreaChart/>
              </div>
            </div>
            <div className="row">
                <div className="col-lg-3 d-flex align-items-center border-end">
                    <div className="icon p-1 bg-danger">
                    <FaCrown/>
                    </div>
                    <div className="sectionname ms-2">
                        <section>Wallet Ballance</section>
                        <section className='price'>$4,5673.90</section>
                    </div>
                    
                </div>
                <div className="col-lg-3 d-flex align-items-center border-end">
                    <div className="icon p-1 bg-success">
                    <IoIosHeart/>
                    </div>
                    <div className="sectionname ms-2">
                        <section>wallet ballance</section>
                        <section className='price'>$4,5673.90</section>
                    </div>
                    
                </div>
                <div className="col-lg-3 d-flex align-items-center border-end">
                    <div className="icon p-1 bg-warning">
                        <FaWandMagicSparkles/>
                    </div>
                    <div className="sectionname ms-2">
                        <section>wallet ballance</section>
                        <section className='price'>$4,5673.90</section>
                    </div>
                    
                </div>
                <div className="col-lg-3 d-flex align-items-center">
                    <div className="icon p-1 bg-primary">
                        <BsGraphUpArrow/>
                    </div>
                    <div className="sectionname ms-2">
                        <section>wallet ballance</section>
                        <section className='price'>$4,5673.90</section>
                    </div>
                    
                </div>

            </div>
          </div>
          </div>
  )
}

export default DashBoardSection