import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";


import Login from './components/pages/Login';
import Register from './components/pages/Register';

import Services from './components/pages/user/Services';
import About from './components/pages/user/About';

import Admin from './components/pages/admin/Admin';
import Patient from './components/pages/admin/Patient';
import Appointment from './components/pages/admin/Appointment';
import Medicine from './components/pages/admin/Medicine';
import Diagnosis from './components/pages/admin/Diagnosis';
import AddPatient from './components/pages/admin/AddPatient';
import AddAppointment from './components/pages/admin/AddAppointment';
import AddMedicine from './components/pages/admin/AddMedicine';
import SearchPatient from './components/pages/admin/SearchPatient';

import Home from './components/pages/Home';

function App() {
  return (
    <Router basename='/telehealth-web'>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />

          <Route path="/patient" element={<Patient />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/admin" element={<Admin />} />
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
