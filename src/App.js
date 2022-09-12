import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Home from "./components/Home"
import Pro from "./components/Pro"
import Dashboard from "./components/Dashboard"
import Abc from "./components/abc"
export default function App() {
  return (
    <div>
    <div>
            <Navbar  sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">                
               
               
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>  
                        <Nav.Link href="#/dashboard">DashBoard</Nav.Link>

                      
                        <Nav.Link href="#/pro">Profile</Nav.Link>
                  
                        
                            <Nav.Link href="#/abc">Abc</Nav.Link>
                  
                        <Nav.Link href="#/Contactus">Contact Us</Nav.Link>
                    </Nav>
            
                </Navbar.Collapse>
            </Navbar>
    </div>
    <Router>
  
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/pro" element={<Pro />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/abc" element={<Abc />}/>

        
      </Routes>
 
  </Router>
  </div>
  );
}

