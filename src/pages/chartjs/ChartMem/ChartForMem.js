import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import MtlData from '../MtlData';
import nuData from '../nuData';
import { chartInfo } from '../../../WebApi';
import dataLabel from '../dataLabel';

const ChartForMem = () => {
  const [memOrderData, setMemOrderData] = useState();
  const [memOrderDataAll, setMemOrderDataAll] = useState();
  const [showChart, setShowChart] = useState(false);
  const [barData, setBarData] = useState([]);
  const [doData, setDodata] = useState([]);
  const mem_id = localStorage.getItem('mem_id');

  setTimeout(() => {
    setShowChart(true);
  }, 300);

  useEffect(() => {
    chartInfo(mem_id).then(obj => {
      console.log(obj);
      setMemOrderData(obj.dataForWeek);
      setMemOrderDataAll(obj.dataForAll);
    });

    const data = dataLabel.map(d => {
      const colorA = Math.random() * 255;
      const colorB = Math.random() * 255;
      const colorC = Math.random() * 255;

      return {
        label: d.label,
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
    // const colorA = Math.random() * 255;
    // const colorB = Math.random() * 255;
    // const colorC = Math.random() * 255;

    const doughnutData = [
      {
        label: 'label',
        data: memOrderDataAll && memOrderDataAll.map(d => d.data),
        fill: true,
        backgroundColor: [
          'rgba(220, 231, 117, 0.4)',
          'rgba(139, 195, 74,0.4)',
          'rgba(77, 208, 225,0.4)',
          'rgb(244, 143, 177,0.4)',
          'rgba(255, 112, 67,0.4)',
          'rgb(141, 110, 99,0.4)',
        ],
        borderColor: `rgb(120, 144, 156)`,
        pointBackgroundColor: `rgb(0, 255, 0)`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: `rgb(0, 0, 255)`,
      },
    ];

    setDodata(doughnutData);
    setBarData(data);
  }, [showChart]);

  const [weekData, setWeekData] = useState({
    labels: memOrderData && memOrderData.map(v => v.data),
    datasets: barData,
  });

  const [allData, setAllData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: memOrderDataAll && memOrderDataAll.map(v => v.label),
    datasets: doData,
  });

  useEffect(() => {
    setWeekData({
      labels: memOrderData && memOrderData.map(data => data.label),
      datasets: barData,
    });

    setAllData({
      maintainAspectRatio: false,
      responsive: false,
      labels: memOrderDataAll && memOrderDataAll.map(v => v.label),
      datasets: doData,
    });
  }, [memOrderData]);

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
    <div className="d-flex px-3 my-5 py-5 justify-content-around">
      <div style={{ width: '600px' }}>
        <p className='ch-title-18 memChartT'>週攝取營養素</p>
        <BarChart chartData={weekData} options={options} />
      </div>
      <div style={{ width: '400px' }}>
      <p className='ch-title-18 memChartT'>月攝取營養素</p>
        <DoughnutChart chartData={allData} />
      </div>
    </div>
  );
};

export default ChartForMem;
