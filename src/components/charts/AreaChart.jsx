// import ReactApexChart from 'apexcharts'


  
//   const AreaChart = () => {
  
//     const options = {
//         chart: {
//           id: 'basic-bar'
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
//         }
//       };
    
//       const series = [{
//         name: 'Sales',
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125] 
//       }];

//     return (
//         <div>
//           <div id="chart">
//             <ReactApexChart />
//           </div>
//           <div id="html-dist"></div>
//         </div>
//     )
//   }
  
//   export default AreaChart





// import React from 'react';
// import ApexCharts from 'apexcharts'

// const AreaChart = () => {
//     const options = {
//         chart: {
//             id: 'basic-bar'
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
//         }
//     };

//     const series = [{
//         name: 'Sales',
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125] 
//     }];

//     return (
//         <div>
//             <div id="chart">
//                 <ReactApexChart options={options} series={series} type="area" height={350} />
//             </div>
//             <div id="html-dist"></div>
//         </div>
//     );
// };

// export default AreaChart;




import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const AreaChart = () => {
  useEffect(() => {
    const options = {
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
        chart: {
        height: 250,
        type: 'area',
        toolbar: {
          show: false, // Hides the toolbar that might provide access to the data table
        }
      },
      colors:['#f2b40a','#6c05b0'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray:undefined,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },  
    }
    
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Clean up the chart instance on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" />;
};

export default AreaChart;