import React from 'react';

const FilterDropdown = ({ onChange }) => {
  return (
    <div className="mb-4">
      <select
        onChange={onChange}
        className="p-2 border rounded bg-white shadow"
      >
        <option value="7d">Last 7 Days</option>
        <option value="30d">This Month</option>
        <option value="90d">Last 3 Months</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
