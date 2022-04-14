import React, { useEffect, useState } from 'react'
import styled from './seed.module.css';

function ShowHistry() {
   const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://undb.herokuapp.com/consumer')
            .then((d) => d.json())
            .then((res) => setData(res))
            .catch((e) => console.log(e.message)) 
    }, []); 
  return (
     <table className={styled.home_table}>
        <thead className={styled.table_border}>
            <tr>
                <th>Name</th>     
                <th>Age</th>   
                <th>Date</th>  
                <th>Time</th>  
            </tr>
        </thead>
          <tbody>   
            {data.map((e)=>
            <tr key={e.id}>      
                <td>{e.name}</td>   
                <td>{e.age}</td>  
                <td>{e.date}</td>  
                <td>{e.time}</td>  
            </tr>   
            )}           
      </tbody>  
    </table>
  )
}

export default ShowHistry