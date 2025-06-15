import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartCard = () => {
  const data = {
    labels: ['Math', 'Science', 'English', 'PE'],
    datasets: [
      {
        label: 'Average Grade (%)',
        data: [88, 91, 86, 95],
        backgroundColor: '#b91c1c',
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Performance by Subject</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChartCard;
