import React, { useEffect, useState } from 'react'
import styled from './seed.module.css';

function Seed() {
  const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then((d) => d.json())
            .then((res) => setData(res))
            .catch((e) => console.log(e.message)) 
    }, []);   
  return (
    <table className={styled.home_table}>
        <thead className={styled.table_border}>
            <tr>
                <th>No</th>     
                <th>Doctors</th>   
                <th>Speciality</th>  
                <th>Availability</th>  
                <th>Cost</th> 
                <th>Appointment</th>  
            </tr>
        </thead>
          <tbody>   
            {data.map((e)=>
            <tr key={e.id}>  
                <td>{e.id}</td>        
                <td>{e.doctors}</td>   
                <td>{e.speciality}</td>  
                <td>{e.availability }</td>  
                <td>{e.cost}</td>  
                <button>Book Appointment</button>  
            </tr>   
            )}           
        </tbody>  
    </table>
  )
}

export default Seed