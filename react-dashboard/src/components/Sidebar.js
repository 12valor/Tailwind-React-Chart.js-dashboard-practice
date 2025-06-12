import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <ul className="space-y-4">
        <li className="hover:text-gray-300">Home</li>
        <li className="hover:text-gray-300">Reports</li>
        <li className="hover:text-gray-300">Analytics</li>
        <li className="hover:text-gray-300">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
