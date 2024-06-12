// import React, { useState } from 'react';
// import ApexCharts from 'apexcharts';

// const DonutChart = () => {
//   const [series] = useState([44, 55, 41, 17, 15]);
//   const [options] = useState({
//     chart: {
//       width: 380,
//       type: 'donut',
//     },
//     plotOptions: {
//       pie: {
//         startAngle: -90,
//         endAngle: 270,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       type: 'gradient',
//     },
//     legend: {
//       formatter: function (val, opts) {
//         return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
//       },
//     },
//     title: {
//       text: 'Gradient Donut with custom Start-angle',
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     ],
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ApexCharts options={options} series={series} type="donut" width={380} />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default DonutChart;




import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const AreaChart = () => {
  useEffect(() => {
   
   const options = {
      chart: {
        width: "100%",
        type: 'donut',
      },
      series:[10, 68, 22.05],
      colors:['#f2b40a','#6c05b0','#fc2349'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        show: false, // Hide the legend
      },
      title: {
        text: '',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false, // Ensure the legend is hidden on smaller screens too
            },
          },
        },
      ],
    };
  

    const chart = new ApexCharts(document.querySelector('#donutechart'), options);
    chart.render();

    // Clean up the chart instance on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="donutechart" className='w-100'/>;
};

export default AreaChart;