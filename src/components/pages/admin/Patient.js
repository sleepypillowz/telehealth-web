// Patient.js
import React from 'react';
import DynamicPage from '../../organisms/DynamicPage.js';

const Patient = () => {
  const headers = ['Patient ID', 'Last Name', 'First Name', 'Age', 'Gender', 'Mobile Number', 'Birthday'];
  const rows = [
    ['001', 'Doe', 'John', '45', 'Male', '09691234567', '2002-08-27']
  ];

  return <DynamicPage title="Patient Information" headers={headers} rows={rows} />;
};

export default Patient;
