import React from 'react'
import Image from './img/prof.png'
import './App.css'
function Appointments({appointments, onUpdateAppointment, setAppointments}) {

  const handleClick = (appointment) => {
    onUpdateAppointment(appointment)
  }
  const handleDelete = (appointment) => {
    let updatedAppointments = appointments.filter((app) => app.id !== appointment.id);
    setAppointments(updatedAppointments);
  }
  return (
    <div className='table-container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Patient</th>
                    <th>Status</th>
                    <th>Appointment</th>
                    <th>Phone</th>
                    <th>Doctor</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {appointments.map((app, index) => (
                <tr key = {index}>
                  <td className='user-details'>
                    <div className="user-info">
                      <div className="user-info">
                        <img src={Image} alt="User Img" />
                      </div>
                      <div>
                        <h5 className="table-heading">{app.pname}</h5>
                        <p className="desc">{app.age} yrs, {app.gender}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className={app.type === "Consult"?"consult-button":"revisit-button"}>{app.type}</button>
                  </td>
                  <td>
                    <h6 className="table-heading">{app.time}</h6>
                    <small>{app.date}</small>
                  </td>
                  <td>
                    <h6 className="table-heading">+91 {app.phone}</h6>
                    <a href="#!"><small>Contact</small></a>
                  </td>
                  <td>
                    <h6 className="table-heading">{app.dname}</h6>
                  </td>
                  <td className='update-delete-container'>
                    <button className='button update-button' onClick={() =>{handleClick(app)}}>Update</button>
                    <button className='button delete-button' onClick={() => {handleDelete(app)}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Appointments
