import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Project from "./components/Project";
import KutanaAfrica from "./components/KutanaAfrica";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";


function Router() {
  return (
    <div>
      <BrowserRouter className="nav1">
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Link to="/">
            <img src="cropped-SLA-Logo.png" alt="SLA-LOGO" className="logo1" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Link to="/" className="Home">
                Home
              </Link>
              <Link to="About" className="About">
                About
              </Link>
              <Link to="Project" className="Project">
                Project
              </Link>
              <Link to="KutanaAfrica" className="KutanaAfrica">
                Kutana Africa
              </Link>
              <Link to="Blog" className="Blog">
                Blog
              </Link>
              <Link to="Contacts" className="Contacts">
                Contacts
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/KutanaAfrica" element={<KutanaAfrica />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
    
    </div>
    
    
  );
}

export default Router;
