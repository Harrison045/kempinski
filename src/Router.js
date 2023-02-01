import React from "react";
import {
  BrowserRouter as AppRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Book from "./components/Book";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

function Router() {
  return (
    
    <AppRouter>
      <Link to="/" className="Home">
        <img src="HARRI1.png" alt="logo" className="Home-image"/>
      </Link>
      <Link to="SignIn" className="Sign">
        <strong>SIGN IN</strong>
        
      </Link>
      <Link to="Book">
        <button className="Book"><strong>BOOK NOW</strong></button>  
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
    </AppRouter>
  );
}

export default Router;
