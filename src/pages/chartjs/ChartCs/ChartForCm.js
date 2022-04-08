import React, { useState, useEffect } from 'react';
import RadarChart from './RadarChart';
import MtlData from '../MtlData';
import nuData from '../nuData';

function ChartForCm(props) {
  const [data, setData] = useState([]);

  //當props改變時，data需重新賦值
  useEffect(() => {
    //將props裡的材料重新組成一個array
    let mtlArray = [];
    if (props.mtls.length === 1) {
      //材料陣列內只有一個的話是電腦版的單點
      mtlArray = props.mtls.map(m => +m);
    } else {
      //材料陣列內有多個的話是手機版的全材料一起呈現
      mtlArray = props.mtls.map(m => +m);
    }
    const data = nuData
      .filter(i => {
        return mtlArray.includes(i.mtl_id);
      })
      .map(d => {
        const colorA = Math.random() * 255;
        const colorB = Math.random() * 255;
        const colorC = Math.random() * 255;

        return {
          label: d.mtl_name,
          data: MtlData.map(data => data[d.mtl_name]),
          fill: true,
          backgroundColor: `rgba(${colorA}, ${colorB}, ${colorC}, 0.4)`,
          borderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
          pointBackgroundColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
        };
      });

    setData(data);
  }, [props.mtls]);

  const [userData, setUserData] = useState({
    labels: MtlData.map(data => data.nutrients),
    datasets: data,
  });

  useEffect(() => {
    setUserData({
      labels: MtlData.map(data => data.nutrients),
      datasets: data,
    });
  }, [data]);

  const [options, setOptions] = useState({
    legend: {
      position: 'top',
      display: true,
      labels: {
        fontColor: 'rgb(60, 180, 100)',
        fontSize: '40px',
      },
    },
    title: {
      display: true,
      text: 'Chart.js Radar Chart',
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
        backdropColor: 'rgba(203, 197, 11, 1)',
      },
    },
    plugins: {
      font: {
        weight: 'bold',
        size: '26',
      },
    },
  });

  return <RadarChart chartData={userData} options={options} />;
}

export default ChartForCm;
