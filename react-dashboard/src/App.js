import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChartCard from './components/ChartCard';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard />
          <ChartCard />
        </main>
      </div>
    </div>
  );
}

export default App;
