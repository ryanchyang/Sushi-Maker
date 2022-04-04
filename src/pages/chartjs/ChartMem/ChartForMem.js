import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import MtlData from '../MtlData';
import nuData from '../nuData';
import fakeData from '../fakeData';
import { chartInfo } from '../../../WebApi';
import dataLabel from '../dataLabel';

const ChartForMem = () => {
  const [memOrderData, setMemOrderData] = useState();
  const mem_id = localStorage.getItem('mem_id');
  console.log(memOrderData);

  useEffect(() => {
    chartInfo(mem_id).then(obj => {
      setMemOrderData(obj);
    });
  }, []);

  const data = dataLabel
    // .filter(i => {
    //   return [12, 13].includes(i.mtl_id);
    // })
    .map(d => {
      const colorA = Math.random() * 255;
      const colorB = Math.random() * 255;
      const colorC = Math.random() * 255;

      return {
        label: d.label,
        // data: MtlData.map(data => data[d.mtl_name]),
        data: memOrderData && memOrderData.map(data => data[d.label]),
        fill: true,
        backgroundColor: `rgba(${colorA}, ${colorB}, ${colorC}, 0.4)`,
        borderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
        pointBackgroundColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
      };
    });

  const doughnutData = nuData
    .filter(i => {
      return [8].includes(i.mtl_id);
    })
    .map(d => {
      const colorA = Math.random() * 255;
      const colorB = Math.random() * 255;
      const colorC = Math.random() * 255;

      return {
        label: d.mtl_name,
        data: MtlData.filter(info => {
          return info.nutrients !== 'FAT';
        }).map(data => data[d.mtl_name]),
        fill: true,
        backgroundColor: [
          'rgba(255,10,255, 0.4)',
          'rgba(10,10,255, 0.4)',
          'rgba(10,10,10, 0.4)',
          'rgba(10,50,25, 0.4)',
          'rgba(10,20,100, 0.4)',
        ],
        borderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
        pointBackgroundColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: `rgb(${colorA}, ${colorB}, ${colorC})`,
      };
    });

  const [fatData, setFatData] = useState({
    labels: fakeData.map(data => data.label),
    datasets: data,
  });

  const [otherData, setOtherData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: ['SUGAR', 'PROTEIN', 'CARBO', 'SODIUM', 'CALORIES'],
    datasets: doughnutData,
  });
  const [options, setOptions] = useState({
    legend: {
      position: 'bottom',
      display: false,
      labels: {
        fontColor: 'rgb(60, 180, 100)',
        fontSize: 30,
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
        size: '18',
      },
    },
  });

  return (
    <div className="d-flex mx-5">
      <div className="mr-5" style={{ width: '600px' }}>
        <BarChart chartData={fatData} options={options} />
      </div>
      <div className="ml-5" style={{ width: '500px' }}>
        <DoughnutChart chartData={otherData} />
      </div>
    </div>
  );
};

export default ChartForMem;
