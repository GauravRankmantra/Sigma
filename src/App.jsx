import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home"


function App() {


  return (
    <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cottages" element={<Cottages />} />
        <Route path="/activities" element={<Adventure />} />
        <Route path="/rafting" element={<Rafting />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/camping" element={<Camping />} /> */}
        
        
        
     
      </Route>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forget_pass" element={<ForgetPass />} /> */}
    </Routes>
  </Router>
  )
}

export default App
