// DynamicPage.js (generic page component)
import React from 'react';
import Table from './Table';

const DynamicPage = ({ title, headers, rows }) => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 pl-24 text-3xl font-semibold text-gray-900">{title}</h1>
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default DynamicPage;
