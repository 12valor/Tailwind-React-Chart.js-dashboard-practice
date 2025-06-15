import React from 'react';

const stats = [
  { label: 'Total Sales', value: '1561' },
  { label: 'Average Sales Per Day', value: '237' },
  { label: 'Top Performing Product', value: 'Student Meal #1' },
  { label: 'Peak hour', value: '12:10' },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white text-red-700 p-6 rounded-xl shadow hover:bg-red-700 hover:text-white hover:animate-pulse hover:ease-in">
          <p className="text-sm">{stat.label}</p>
          <h2 className="text-2xl font-bold">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
