import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './Details'
import Seed from './Seed'
import ShowHistry from './ShowHistry'

function Page() {
  return (
    <Routes>
      <Route path='/' element={ <Seed/>}/>
      <Route path='/form' element={<Details />} />
      <Route path='/histry' element ={<ShowHistry/>}/>
    </Routes>
  )
}

export default Page