import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/Pages/HomePage.jsx";
import IT from './components/Pages/IT.jsx'
import FacultyProfile from "./components/Pages/FacultyProfile.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddData from "./components/AddData/AddData.jsx";
function App(){
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/IT" element={<IT/>} />
        <Route path="/addData" element={<AddData/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App


