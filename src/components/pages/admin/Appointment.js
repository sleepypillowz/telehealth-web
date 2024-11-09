// Appointment.js
import React from 'react';
import DynamicPage from '../../organisms/DynamicPage.js';

const Appointment = () => {
  const headers = ['Appointment ID', 'Patient', 'Date', 'Time', 'Service', 'Status'];
  const rows = [
    ['001', 'John Doe', '2024-09-01', '10:00 AM', 'Checkup', 'Scheduled']
  ];

  return <DynamicPage title="Appointments" headers={headers} rows={rows} />;
};

export default Appointment;
