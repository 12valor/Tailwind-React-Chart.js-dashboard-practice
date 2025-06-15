import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-maroon text-white w-64 min-h-screen p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li className="bg-red-700 rounded-md hover:text-maroon cursor-pointer shadow-xl">Overview</li>
          <li className="bg-red-700 rounded-md hover:text-maroon cursor-pointer shadow-xl">Products</li>
          <li className="bg-red-700 rounded-md hover:text-maroon cursor-pointer shadow-xl">Orders</li>
          <li className="bg-red-700 rounded-md hover:text-maroon cursor-pointer shadow-xl">Cashier</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
