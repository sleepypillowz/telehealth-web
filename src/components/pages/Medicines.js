const Medicines = () => {
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <th>Name</th>
            <th>Dosage Form</th>
            <th>Strength</th>
            <th>Quantity</th>
            <th>Reorder Level</th>
            <th>Expiry Date</th>
            <th>Batch Number</th>
            <th>Supplier</th>
            <th>Storage Conditions</th>
            <th>Date Recieved</th>
            <th>Date Last Used</th>
            <th>Usage</th>
            <th>Prescribed By</th>
            <th>Remarks</th>
          </thead>
          <tbody>
            <tr>
              <td>Paracetamol</td>
              <td>Tablet</td>
              <td>500 mg</td>
              <td>200</td>
              <td>50</td>
              <td>2025-12-31</td>
              <td>B12345</td>
              <td>Health Pharma</td>
              <td>Room Temperature</td>
              <td>2024-01-15</td>
              <td>2024-08-20</td>
              <td>Pain, Fever</td>
              <td>Dr. A. Smith</td>
              <td>None</td>
            </tr>
          </tbody>

        </table>
      </div>
    </>
  );
}

export default Medicines;