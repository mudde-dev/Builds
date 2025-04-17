import React from 'react'
import { Index } from '../pages';
import { BandView } from '../pages/band-simple-pager';
import {Routes, Route} from 'react-router-dom';

export function AppRouter() {
  return (
  
    <Routes>

    <Route path="/" element={<Index/>}/>
    <Route path="band-simple-pager" element={<BandView/>}/>

   </Routes>
   
  )
}
