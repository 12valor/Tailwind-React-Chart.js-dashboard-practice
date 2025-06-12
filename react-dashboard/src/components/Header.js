import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Welcome Back</h2>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Admin</span>
        <img src="https://i.pravatar.cc/40" alt="User" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
