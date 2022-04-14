import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from './seed.module.css';

function Details() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    
    const post_data = () => {
        let _data = {
            name: name,
            age: age,
            date: date,
            time: time
        };

        fetch("http://localhost:8000/consumer", {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));
        setName('')
        setAge('')
        setDate('')
        setTime('')
    }
    return (
        <div>
            <div className={styled.form_data}>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.currentTarget.value)}
            /><br/>
            <label>Age:</label>
            <input
                type="number"
                value={age}
                onChange={(e)=>setAge(e.currentTarget.value)}
            /><br/>
            <label>Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.currentTarget.value)}
            /><br/>
            <label>Time:</label>
            <select 
                value={time}
                onChange={(e)=>setTime(e.currentTarget.value)}
            >
                <option value="Time">Time</option>
                <option>11:00</option>
                <option>11:20</option>
                <option>11:40</option>
                <option>12:00</option>
                <option>12:20</option>
                <option>12:40</option>
                <option>01:00</option>
            </select><br/>
                <button onClick={post_data}>SUBMIT</button><br/>
                 <Link className={styled.form_Link} to='/histry'>HISTRY SLOTS</Link>
            </div> 
       </div>
  )
}
export default Details