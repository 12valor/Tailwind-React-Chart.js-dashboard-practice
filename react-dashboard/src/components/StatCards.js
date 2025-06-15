import React from 'react';

const stats = [
  { label: 'Total Students', value: '356' },
  { label: 'Average Attendance', value: '92%' },
  { label: 'Top Performer Avg Grade', value: '96%' },
  { label: 'Disciplinary Cases', value: '5' },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-red-700 text-white p-6 rounded-xl shadow hover:bg-maroon-light hover:text-white transition">
          <p className="text-sm">{stat.label}</p>
          <h2 className="text-2xl font-bold">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
