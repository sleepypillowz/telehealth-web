const Appointment = () => {
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <th>Appointment ID</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>John Doe</td>
              <td>2024-09-01</td>
              <td>10:00 AM</td>
              <td>Checkup</td>
              <td>Scheduled</td>
            </tr>
          </tbody>

        </table>
      </div>

    </>
  );
}

export default Appointment;