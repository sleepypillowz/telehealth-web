import Table from '../organisms/Table';

const Patients = () => {
  const headers = ['Appointment ID', 'Patient', 'Date', 'Time', 'Service', 'Status'];
  const rows = [
    ['001', 'John Doe', '2024-09-01', '10:00 AM', 'Checkup', 'Scheduled']
  ];

  return <Table headers={headers} rows={rows} />;
}

export default Patients;
