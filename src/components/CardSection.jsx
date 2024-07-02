import React from 'react'
import { LiaChartBarSolid } from "react-icons/lia";
import { SlGraph } from "react-icons/sl";



const CardSection = () => {
  return (
    <div className='row card-section'>
        <div className="col-lg-3">
            <div className="card p-2 text-white shadow">
                <h5>revenu status</h5>
                <div className='d-flex  align-items-center justify-content-between'>
           <LiaChartBarSolid className='icon text-white'/>                    
                        <section>
                        <h2 className='m-0'>$432</h2>
                        <p className='m-0'>01-jun-2014</p>
                    </section>

                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card p-2 text-white h-100 shadow">
                <div className="design"></div>
                <h5>page view</h5>
                <div className='d-flex  align-items-center justify-content-between'>
           {/* <LiaChartBarSolid className='icon text-white'/>                     */}
                        <section>
                        <h2 className='m-0'>$432</h2>
                    </section>

                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card p-2 text-white shadow">
                <h5>bounce rate</h5>
                <div className='d-flex   justify-content-between'>                   
                        <section>
                        <h2 className='m-0'>$432</h2>
                    </section>
                    <SlGraph className='icon'/>

                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card p-2 text-white shadow">
                <h5>revenu status</h5>
                <div className='d-flex  align-items-center justify-content-between'>
           <LiaChartBarSolid className='icon text-white'/>                    
                        <section>
                        <h2 className='m-0'>$432</h2>
                        <p className='m-0'>01-jun-2014</p>
                    </section>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CardSection