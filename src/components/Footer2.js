import React from "react";
import { FaEnvelope, FaHome,FaPhoneAlt, FaPrint } from "react-icons/fa";

const Footer2 = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row py-5 text-white">
          <div className="col-md-3 col-sm-12">
            <h4>Company Name</h4>
            <p>
              In this section we sould write about the company to introduce your
              company or something
            </p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4>Services</h4>
            <p>About</p>
            <p>Return Policy</p>
            <p>Customer services</p>
            <p>About</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4>Useful Links</h4>
            <p>sitemap</p>
            <p>Shipping Rates</p>
            <p>Affilita</p>
            <p>Affilita</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4>Address</h4>
            <FaHome className="some"/>
            <p clas className="letter">Kabul...</p>
            <FaPhoneAlt className="some2"/>
            <p className="letter2">03030302020303</p>

            <FaEnvelope className="some3" />
            <p className="letter3">wieidkd@gmail.com</p>
            <FaPrint className="some4" />
            <p className="letter4">+3984093u904092390</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
