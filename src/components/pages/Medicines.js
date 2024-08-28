import Table from '../organisms/Table';

const Medicines = () => {
  const headers = ['Name', 'Quantity', 'Expiry Date'];
  const rows = [
    ['Paracetamol', '200', '2025-12-31']
  ];

  return <Table headers={headers} rows={rows} />;
}

export default Medicines;
