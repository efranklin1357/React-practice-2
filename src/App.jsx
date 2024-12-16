
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Nav from "./components/Nav.jsx"
import Users from "./pages/Users.jsx"



function App() {
  return (
    
<Router>

  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users/:id" element={<Users />} />
  <Route path="/About" element={<About />} />
  <Route path="/Contact" element={<Contact />} />
  </Routes>
</Router>
    
 
  );
}

export default App;
