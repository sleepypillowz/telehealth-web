import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Patients from './components/pages/Patients';
import Appointment from './components/pages/Appointment';
import Diagnosis from './components/pages/Diagnosis';
import Medicines from './components/pages/Medicines';

import AddPatient from './components/pages/AddPatient';
import AddAppointment from './components/pages/AddAppointment';
import AddMedicine from './components/pages/AddMedicine';
import SearchPatient from './components/pages/SearchPatient';

function App() {
  return (
    <Router basename='/telehealth-web'>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/addpatient" element={<AddPatient />} />
          <Route path="/addappointment" element={<AddAppointment />} />
          <Route path="/addmedicine" element={<AddMedicine />} />
          <Route path="/searchpatient" element={<SearchPatient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
