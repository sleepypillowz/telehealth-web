const Patients = () => {
  return (
    <>

      <div className="table-container">
        <table>
          <thead>
            <th>Patient ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Birthday</th>

          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Doe</td>
              <td>John</td>
              <td>45</td>
              <td>Male</td>
              <td>09691234567</td>
              <td>2002-08-27</td>
            </tr>
          </tbody>

        </table>
      </div>


    </>
  );
}

export default Patients;