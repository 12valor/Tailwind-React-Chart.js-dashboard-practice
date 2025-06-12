import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartCard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales',
      data: [10, 40, 35, 70, 55],
      borderColor: '#3b82f6',
      tension: 0.4,
    }],
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-bold mb-4">Monthly Sales</h3>
      <Line data={data} />
    </div>
  );
};

export default ChartCard;
