import React, { useContext} from 'react'
import styled from './seed.module.css';
import { ContextProvider } from '../contextApi/ContextApi';
import { Link} from 'react-router-dom';

function Seed() {
  const { data } = useContext(ContextProvider);
  
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
                <Link className={styled.button_booking} to="/form" >Book Appointment</Link>  
            </tr>   
            )}           
      </tbody>  
    </table>
  )
}

export default Seed