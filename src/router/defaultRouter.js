import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import PhoneBook from "../pages/phoneBook/phoneBook";
import Contact from "../pages/contact/contact";
import NavBar from "../components/navBar/navBar.js";

function DefaultRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<PhoneBook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default DefaultRouter;
