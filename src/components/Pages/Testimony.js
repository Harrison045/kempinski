import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Testimony = () => {
  return (
    <div className="testimony mx-auto">
      <h1 className="text-center">Testimonies</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <Carousel fade>
        <Carousel.Item>
          <figure class="md:flex bg-slate-100 rounded-xl md:h-200 md:w-100 p-8 md:p-0 dark:bg-slate-800">
            <img
              class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="Mark.jpeg"
              alt=""
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg text-left font-medium text-white">
                  “Samuel, Nicholas, Prince and their team bring an unexpected
                  wave of enthusiasm and a collaborative can-do attitude to any
                  project. having seen Start.Up Lounge put in a multi-country
                  roadshow and work with dozens of startups before, I am
                  confident they would be an asset for startups and SMEs alike.”
                </p>
              </blockquote>
              <figcaption class="font-medium text-left">
                <div class="text-sky-500 dark:text-sky-400 text-lg">
                  Mark Kleyner
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Co-Founder @ Dream VC
                </div>
              </figcaption>
            </div>
          </figure>
        </Carousel.Item>
        <Carousel.Item>
          <figure class="md:flex bg-slate-100 rounded-xl md:h-200 md:w-100 p-8 md:p-0 dark:bg-slate-800 testimony1">
            <img
              class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="Juanita.jpeg"
              alt=""
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg text-left font-medium text-white">
                  “Our Partnership with Start-Up Lounge Africa has been of great
                  value to us. It has not only helped us to raise awareness to
                  the importance of sustainable chemistry but also advance the
                  regional discussion on opportunities, priorities and needs for
                  Sustainable Chemistry by partnering with us for our roundtable
                  series in Ghana and helpig identify like minded organization.”
                </p>
              </blockquote>
              <figcaption class="font-medium text-left">
                <div class="text-sky-500 dark:text-sky-400 text-lg">
                  Juanita Haublab
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  International Relations Manager @ ISC3 Innovation Hub
                </div>
              </figcaption>
            </div>
          </figure>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimony;
