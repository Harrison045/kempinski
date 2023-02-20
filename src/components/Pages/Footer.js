import React from "react";
import { Button } from "react-bootstrap";
// import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="">
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
              <p className="hover:underline hover:decoration-sky-500 hover:decoration-solid">Home</p>
              <p className="hover:underline hover:decoration-sky-500">About</p>
              <p className="hover:underline hover:decoration-red-500">Contact</p>
              <p className="hover:underline hover:decoration-red-900">Kutana Africa</p>
              <p className="hover:underline hover:decoration-sky-500">What We Do</p>
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
                  <br/>
                  <input
                    type="email"
                    placeholder="Enter Email here"
                    className="mails rounded-md bg-dark"
                  />
                  <Button className="subm"><span className="text-center subm1">Submit</span></Button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* underfooter */}
          <div className="footer-line"></div>
          <div className="row text-white underfooter">
            <div className="col-md-5 col-sm-12 ">
              <h6>Subscribe to our news letters</h6>
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <br />
            <div className="col-md-5 col-sm-12 mails2">
              <input type="email" placeholder="Enter Your Mail" className="bg-dark rounded-md mails3"/>
              <Button className="btn4"><span className="text-center sub">Subscribe</span></Button>
            </div>
          </div>
          <br/>
          <div className="footer-line"></div>
          <br/>
          <div className=" row text-white">
            <div className="col-md-5 col-sm-12 ">&copy;  2022  StartUp Lounge Africa. All Rights Reserved.</div>
          <div className="col-md-4 col-sm-12 media ">
            <button>
              <img src="facebook.png" alt="facebook" className="facebook"/>
            </button>
            <button>
              <img src="instagram.png" alt="instagram" className="instagram"/>
            </button>
            <button>
              <img src="twitter.png" alt="twitter" className="twitter"/>
            </button>
            <button>
              <img src="linkedIn.png" alt="linkedIn" className="linkedIn"/>
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
