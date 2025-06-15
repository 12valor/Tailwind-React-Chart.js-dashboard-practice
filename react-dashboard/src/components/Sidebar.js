import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-maroon text-white w-64 min-h-screen p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li className="hover:text-maroon-light cursor-pointer">Overview</li>
          <li className="hover:text-maroon-light cursor-pointer">Products</li>
          <li className="hover:text-maroon-light cursor-pointer">Orders</li>
          <li className="hover:text-maroon-light cursor-pointer">Cashier</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
