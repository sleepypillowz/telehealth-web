import Table from '../organisms/Table';

const Patients = () => {
  const headers = ['Patient ID', 'Last Name', 'First Name', 'Age', 'Gender', 'Mobile Number', 'Birthday'];
  const rows = [
    ['001', 'Doe', 'John', '45', 'Male', '09691234567', '2002-08-27']
  ];

  return <Table headers={headers} rows={rows} />;
}

export default Patients;
