import { motion } from "framer-motion";
import { useState } from "react";

function CardExpansion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card7 rounded-lg"
        style={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.5" }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div initial={{opacity:0}} animate=
          {{opacity:1 }} transition={{duration:1}} className="expand">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              pariatur quaerat eius est non dolorum. Velit recusandae, ea
              similique voluptas dolores
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              nesciunt.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default CardExpansion;
