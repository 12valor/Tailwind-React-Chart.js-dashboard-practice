import React from 'react';

const StatCards = () => {
  const stats = [
    { label: 'Users', value: '1,205' },
    { label: 'Revenue', value: '$12,340' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
          <h4 className="text-sm text-gray-500">{stat.label}</h4>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
