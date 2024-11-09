// Medicine.js
import React from 'react';
import DynamicPage from '../../organisms/DynamicPage.js';

const Medicine = () => {
  const headers = ['Name', 'Quantity', 'Expiry Date'];
  const rows = [
    ['Paracetamol', '200', '2025-12-31']
  ];

  return <DynamicPage title="Medicine Inventory" headers={headers} rows={rows} />;
};

export default Medicine;
