import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React from 'react';

const WeeklyReportButton = () => {
  const generatePDF = async () => {
    const input = document.body;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('weekly-report.pdf');
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-red-700 text-white px-4 py-2 mt-4 rounded hover:bg-red-800"
    >
      Download Weekly Report (PDF)
    </button>
  );
};

export default WeeklyReportButton;
