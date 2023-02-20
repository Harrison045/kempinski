import { motion } from "framer-motion";
import { useState } from "react";

const Testimony = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false)
  return (
    <div className="testimony mx-auto">
      <h1 className="text-center font-bold testimony2">Testimonies</h1>

      <div className="App">
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="card7 rounded-lg"
          style={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.5" }}
        >
          <motion.h2
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Mark Kleyner
          </motion.h2>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="expand"
            >
              <figure class="md:flex bg-slate-100 rounded-xl md:h-200 md:w-100 p-8 md:p-0 dark:bg-slate-800">
                <img
                  class="w-14 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src="Mark.jpeg"
                  alt=""
                  width="374"
                  height="512"
                />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p class="text-lg text-left font-medium text-white">
                      “Samuel, Nicholas, Prince and their team bring an
                      unexpected wave of enthusiasm and a collaborative can-do
                      attitude to any project. having seen Start.Up Lounge put
                      in a multi-country roadshow and work with dozens of
                      startups before, I am confident they would be an asset for
                      startups and SMEs alike.”
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
            </motion.div>
          )}
        </motion.div>

        <div className="px-10">
          <motion.div
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setIsToOpen(!isToOpen)}
            className="card7 rounded-lg"
            style={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.5" }}
          >
            <motion.h2 layout="position">Juanita Haublab</motion.h2>
            {isToOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="expand"
              >
                <figure class="md:flex bg-slate-100 rounded-xl md:h-200 md:w-100 p-8 md:p-0 dark:bg-slate-800">
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
                        “Our Partnership with Start-Up Lounge Africa has been of
                        great value to us. It has not only helped us to raise
                        awareness to the importance of sustainable chemistry but
                        also advance the regional discussion on opportunities,
                        priorities and needs for Sustainable Chemistry by
                        partnering with us for our roundtable series in Ghana
                        and helpig identify like minded organization.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium text-left md-6">
                      <div class="text-sky-500 dark:text-sky-400 text-lg">
                        Juanita Haublab
                      </div>
                      <div class="text-slate-700 dark:text-slate-500">
                        International Relations Manager @ ISC3 Innovation Hub
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
