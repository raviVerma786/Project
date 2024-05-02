import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Hero/>}/>
        <Route exact path="/login" element={<LogIn/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/categories" element={<Categories/>}/>
        <Route exact path="/contacts" element={<Contacts/>}/>
      </Routes>
    </>
  );
}

export default App;
