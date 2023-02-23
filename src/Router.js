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
import { motion } from "framer-motion";

function Router() {
  return (
    <div>
      <BrowserRouter className="nav1 ">
        <div className="">
          {/* <Navbar bg="white" expand="lg" >
        <Container fluid>
          <Link to="/">
            <img src="cropped-SLA-Logo.png" alt="SLA-LOGO" className="logo1" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Link to="/" className="Home text-lg">
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
      </Navbar> */}

          <nav className=" nav bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <Link to="/">
                <img
                  src="cropped-SLA-Logo.png"
                  alt="SLA-LOGO"
                  className="logo1"
                />
              </Link>
              <div className="flex md:order-2"></div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <Link to="/" className="Home text-lg">
                    <p className="block text-gray-700 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Home
                    </p>
                  </Link>
                  <li>
                    <Link to="About" className="About">
                      <p className="block text-gray-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        About
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="Project" className="Project">
                      <p className="block text-gray-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Project
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="KutanaAfrica" className="KutanaAfrica">
                      <p className="block text-gray-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Kutana Africa
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="Blog" className="Blog">
                      <p className="block text-gray-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Blog
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="Contacts" className="Contacts">
                      <p className="block text-gray-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Contacts
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

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
