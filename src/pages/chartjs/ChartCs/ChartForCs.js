import React, { useState } from "react";
import RadarChart from "./RadarChart";
import MtlData from "../MtlData";
import nuData from "../nuData";



const ChartForCs = () => {
  const data = nuData.filter(i => {
    return [8,30,15].includes(i.mtl_id)
  })
  .map((d) => {
    const colorA = Math.random() * 255;
    const colorB = Math.random() * 255;
    const colorC = Math.random() * 255;

    return {
      label: d.mtl_name,
      data: MtlData.map((data) => data[d.mtl_name]),
      fill: true,
      backgroundColor: `rgba(${colorA}, ${colorB}, ${colorC}, 0.4)`,
      borderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
      pointBackgroundColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
    };
  });

  const [userData, setUserData] = useState({
    labels: MtlData.map((data) => data.nutrients),
    datasets: data,
  });
  const [options, setOptions] = useState({
    
    legend: {
      position: "top",
      display:true,
      labels: {
        fontColor: 'rgb(60, 180, 100)',
        fontSize: "30px"
      }
    },
    title: {
      display: true,
      text: "Chart.js Radar Chart",
    },
    elements: {
      line: {
        borderWidth: 1,
      },
    },
    scale: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 50,
      },
      // angleLines: {
      //   color: "rgba(255, 255, 255, .3)",
      //   lineWidth: 1
      // },
      // gridLines: {
      //   color: "rgba(255, 255, 255, .3)",
      //   circular: true
      // },
      ticks: {
        min: 0,
        max: 50,
        stepSize: 10,
        showLabelBackdrop: false,
        backdropColor: "rgba(203, 197, 11, 1)",
      },
    },
    plugins: {
      font: {
        weight: 'bold',
        size: '18',
        },
    }
  });

  return (
    <div>
      <div style={{ width: "600px" }}>
        <RadarChart chartData={userData} options={options} />
      </div>
      {/* <div style={{width:"700px"}}>
        <BarChart chartData={userData} />
      </div>
      <div style={{width:"700px"}}>
        <LineChart chartData={userData} />
      </div>
      <div style={{width:"700px"}}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
};

export default ChartForCs;