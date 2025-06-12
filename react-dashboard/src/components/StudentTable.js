// src/components/StudentTable.js
import React from 'react';

const students = [
  { id: 1, name: 'Anna Cruz', grade: 96, attendance: '98%', behavior: 'Excellent' },
  { id: 2, name: 'Liam Santos', grade: 88, attendance: '92%', behavior: 'Good' },
  { id: 3, name: 'Mia Lopez', grade: 91, attendance: '95%', behavior: 'Fair' },
  { id: 4, name: 'John Dela Cruz', grade: 85, attendance: '89%', behavior: 'Warning' },
];

const StudentTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4 text-maroon">Student Summary</h3>
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-maroon text-white">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Grade</th>
            <th className="p-2 text-left">Attendance</th>
            <th className="p-2 text-left">Behavior</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-maroon/5 border-b">
              <td className="p-2">{student.id}</td>
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.grade}</td>
              <td className="p-2">{student.attendance}</td>
              <td className={`p-2 ${student.behavior === 'Warning' ? 'text-red-600' : ''}`}>
                {student.behavior}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
