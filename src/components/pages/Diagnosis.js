import Table from '../organisms/Table';

const Medicines = () => {
  const headers = ['Patient', 'Diagnosis', 'Date of Admission'];
  const rows = [
    ['John Doe', 'Hypertension', '2024-12-31']
  ];

  return <Table headers={headers} rows={rows} />;
}

export default Medicines;
