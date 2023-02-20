import React from "react";
import { motion } from "framer-motion";

const LittleInfo = () => {
  return (
    <div className="">
      <div className="bg-white management">
        <div className="mx-100 max-w-20xl py-14 sm:px-6 sm:py-32 lg:px-1">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-1xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-10 max-w-md text-left text-white lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h1 className="lil">
                Through our programs, events,
                <br /> projects <br /> and webinar series we have reached…
              </h1>
            </div>
            <motion.div className="relative mt-16 h-80 lg:mt-8">
              <div>
                <img src="cash.png" alt="cash" className="cash" />
                <h2 className="cash-num text-white">500+</h2>
                <p className="early text-white text-center">Early Stage Startups and Local <br/> SMEs</p>
              </div>
              <div>
                <img srcSet="peoples.png" alt="people" className="peoples"/>
                <h2 className="people-num text-white">10+</h2>
                <p className="clients text-white">Consulting Clients</p>
              </div>
              <div>
                <img src="earth.png" alt="earth" className="earth"/>
                <h2 className="earth-num text-white">5+</h2>
                <p className="foot text-white">Footprint in Countries</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleInfo;
