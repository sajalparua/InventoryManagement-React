import React from 'react'
import DonutChart from './charts/DonutChart'

const TrafficSection = () => {
  return (
    <div className="donut-section h-100">
    <div className="card h-100 shadow border-0 p-3">
        <h5>Traffic</h5>
        <DonutChart/>
        <div className="row  mt-auto m-0 lower-details ">
          <div className="col-lg-4 p-0">
            <h2>33%</h2>
            <section><div className="dot1 me-1"></div>Facebook</section>

          </div>
          
          <div className="col-lg-4 p-0">
            <h2>55%</h2>
            <section><div className="dot2 me-1"></div>Youtube</section>

          </div>
          <div className="col-lg-4 p-0">
            <h2>23%</h2>
            <section className='border'><div className="dot3 me-1"></div>Direct Search</section>

          </div>
        </div>
    </div>
    </div>
  )
}

export default TrafficSection