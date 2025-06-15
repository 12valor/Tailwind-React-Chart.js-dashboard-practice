import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartCard = () => {
  const data = {
    labels: ['Student Meal #1', 'Student Meal #2', 'Student Meal #3', 'Student Meal #4'],
    datasets: [
      {
        label: 'Sales (₱)',
        data: [1202, 788, 346, 975], // fictional sales numbers
        backgroundColor: '#b91c1c', // Tailwind red-700
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Sales by Meal</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChartCard;
