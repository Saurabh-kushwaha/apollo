import React, { createContext, useEffect, useState } from 'react'

export const ContextProvider = createContext();

function ContextApi({ children }) {
  const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then((d) => d.json())
            .then((res) => setData(res))
            .catch((e) => console.log(e.message)) 
    }, []);    
  return (
    <ContextProvider.Provider value={{data}}>
        {children} 
    </ContextProvider.Provider>
  )
}
export default ContextApi