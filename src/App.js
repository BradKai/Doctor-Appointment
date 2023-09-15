import React, {useState} from 'react'
import './App.css';
import Appointments from './Appointments';
import Form from './Form'
function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleAppointmentUpdate = (appointment) => {
    setSelectedAppointment(appointment)
  }

  return (
    <>
      <Form appointments = {appointments}
        setAppointments = {setAppointments}
        addAppointment = {addAppointment}
        setSelectedAppointment = {setSelectedAppointment}
        selectedAppointment ={selectedAppointment} />
      <Appointments
        appointments={appointments}
        onUpdateAppointment={handleAppointmentUpdate}
        setAppointments={setAppointments}
      />
    </>
  );
}

export default App;
