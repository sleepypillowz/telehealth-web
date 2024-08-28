import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

      <div className="my-4 flex justify-center space-x-4">
        <Link to="/addpatient" className="btn">Add Patient</Link>
        <Link to="/searchpatient" className="btn" >Search Patient</Link>
        <Link to="/addappointment" className="btn" >Add Appointment</Link>
      </div >

    </>
  );
}

export default Home;