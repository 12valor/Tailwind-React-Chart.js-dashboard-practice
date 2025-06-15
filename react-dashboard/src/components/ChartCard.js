import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartCard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Canteen Sales (₱)',
        data: [100, 1500, 2000, 2500],
        fill: true,
        backgroundColor: 'rgba(185, 28, 28, 0.2)', // lighter red fill
        borderColor: '#b91c1c', // red-700
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Monthly Canteen Sales</h3>
      <Line data={data} />
    </div>
  );
};

export default ChartCard;
