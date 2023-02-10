import React from "react";
import { FaEnvelope, FaHome, FaPhoneAlt, FaPrint } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-dark">
        <div className="container">
          <div className="row py-5 text-white">
            <div className="col-md-5 col-sm-12 ">
              <img src="SLA-Logo-2.png" alt="logo" />
              <p>
                We are a management consulting firm providing specialised
                business development support for both technology and
                non-technology startup and SMEs across Africa.
              </p>
            </div>
            {/* <div className="col-md-3 col-sm-12">
              <h4>Services</h4>
              <p>About</p>
              <p>Return Policy</p>
              <p>Customer services</p>
              <p>About</p>
            </div> */}
            <div className="col-md-3 col-sm-12 text-left">
              <h4>Useful Links</h4>
              <p>Home</p>
              <p>Contact</p>
              <p>Kutana Africa</p>
              <p>What We Do</p>
            </div>
            <div className="col-md-3 col-sm-12">
              {/* <h4>Address</h4>
              <FaHome className="some" />
              <p clas className="letter">
                Kabul...
              </p>
              <FaPhoneAlt className="some2" />
              <p className="letter2">03030302020303</p>

              <FaEnvelope className="some3" />
              <p className="letter3">wieidkd@gmail.com</p>
              <FaPrint className="some4" />
              <p className="letter4">+3984093u904092390</p> */}

              <div>
                <div className="text-left h-60 w-150 mx-auto report1 text-white">
                  <h2>Get Our Report Here</h2>
                  <p>Get the best reports in your inbox</p>
                  <input
                    type="email"
                    placeholder="Enter Email here"
                    className="mails rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
