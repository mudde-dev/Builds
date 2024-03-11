import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Error from '../pages/error';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/page1" exact element={<Page1 />} />
      <Route path="/page1/:param1" element={<Page1/>}/>
      <Route path="/page1/:param1/:param2" element={<Page1/>}/>
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      
      {/* Passing a property when rendering and element */}
      <Route path="*" element={<Error details={{msg: "Page not found"}} />} />
    </Routes>
  )
}

export default AppRouter