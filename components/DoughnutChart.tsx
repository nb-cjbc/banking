"use client" // Ensures this component only runs on the client side


import React from 'react'
import { Doughnut } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register elements
ChartJS.register(ArcElement, Tooltip, Legend);


function DoughnutChart(accounts: DoughnutChartProps) {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            label: 'Banks',
            data: [12, 19, 3, 5],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      };
      
    return <Doughnut 
        data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }} />
}

export default DoughnutChart