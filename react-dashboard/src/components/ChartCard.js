import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartCard = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Attendance Rate (%)',
        data: [95, 90, 92, 94],
        fill: false,
        backgroundColor: '#800000',
        borderColor: '#800000',
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Monthly Attendance</h3>
      <Line data={data} />
    </div>
  );
};

export default ChartCard;
