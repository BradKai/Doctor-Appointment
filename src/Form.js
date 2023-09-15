import React, { useEffect, useState } from 'react'
import './App.css'

function Form({appointments, setAppointments, addAppointment , setSelectedAppointment, selectedAppointment}) {

    let [singleAppointment, setSingleAppointment] = useState({
        id: 0,
        pname : "",
        phone : "",
        dname : "",
        gender : "",
        date : "",
        type : "",
        age : "",
        time : ""
    });
    const handleChange = (event) => {
        const {name, value} = event.target;

        setSingleAppointment({...singleAppointment, [name]: value});
    }

    useEffect(() => {
        if(selectedAppointment){
            setSingleAppointment(selectedAppointment)
        }else{
            setSingleAppointment({
                id : 0,
                pname: '',
                phone: '',
                dname: '',
                gender: '',
                date: '',
                type: '',
                age: '',
                time: '',
              });
        }
    }, [selectedAppointment])
    const [ID, setID] = useState(0)
    const handleSubmit = (event) => {
        event.preventDefault();
        addAppointment({...singleAppointment, id:ID});
        setID(ID => ID + 1);
        setSingleAppointment({
            id : 0,
            pname : "",
            phone : "",
            dname : "",
            gender : "",
            date : "",
            type : "",
            age : "",
            time : ""
        });
    }
    const handleUpdate = (singleAppointment) => {
        if(selectedAppointment){
            appointments.map((app, index) => {
                if(app.id === singleAppointment.id){
                    app.pname = singleAppointment.pname
                    app.phone = singleAppointment.phone
                    app.dname = singleAppointment.dname
                    app.gender = singleAppointment.gender
                    app.date = singleAppointment.date
                    app.type = singleAppointment.type
                    app.age = singleAppointment.age
                    app.time = singleAppointment.time
                }
                return app
            })
            setSelectedAppointment(null);
        }
    }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <div className='heading-container'>
            <p className='heading'>Welcome to Kanishka's Doctor Appointment Booking</p>
        </div>
        <div className='input-container'>
            <input
                onChange={handleChange}
                value={singleAppointment.pname}
                type='text' name='pname' placeholder='Patient Name' className='input-field' required />
            <input
                onChange={handleChange}
                value={singleAppointment.phone}
            type='text' name='phone' placeholder='Phone Number' className='input-field' required />
            <input
                onChange={handleChange}
                value={singleAppointment.dname}
            type='text' name='dname' placeholder='Doctor Name' className='input-field' required />
            <select
                onChange={handleChange} name = "gender"
                value={singleAppointment.gender}
            className='input-field' required>
                <option value="" hidden>Gender</option>
                <option id='male' value="Male">Male</option>
                <option id='female' value="Female">Female</option>
            </select>
            <input
                onChange={handleChange}
                value={singleAppointment.date}
            type='date' name='date' className='input-field' required />
            <select
                onChange={handleChange} name="type"
                value={singleAppointment.type}
            className='input-field' required>
                <option value="" hidden>Appointment Type</option>
                <option id='revisit' value="Revisit">Revisit</option>
                <option id='consult' value="Consult">Consult</option>
            </select>
            <input
                onChange={handleChange}
                value={singleAppointment.age}
            type='text' name='age' placeholder='Age' className='input-field' required />
            <input
                onChange={handleChange}
                value={singleAppointment.time}
            type='time' name='time' className='input-field' required />
        </div>
        <div className='submit-container'>
            {(selectedAppointment)?
                <button className='submit-button' onClick={() => handleUpdate(singleAppointment)}>Update</button>:
                <input type='submit' value="Book Appointment" className='submit-button' />}
        </div>
    </form>
  )
}

export default Form
