import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChartCard from './components/ChartCard';
import StatCards from './components/StatCards';
import FilterDropdown from './components/FilterDropdown';
import BarChartCard from './components/BarChartCard';
import './chartSetup';


function App() {
  const [filter, setFilter] = useState("7d");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // You can update your charts based on this filter later
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <main className="p-6">
          <FilterDropdown onChange={handleFilterChange} />
          <StatCards />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartCard />
            <BarChartCard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
