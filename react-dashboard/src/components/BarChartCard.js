import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChartCard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Orders',
        data: [120, 190, 300, 500],
        backgroundColor: '#60a5fa',
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-bold mb-4">Orders Overview</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChartCard;
