import { motion } from "framer-motion";
import React from 'react';

function FrameAnimation ()  {
    return (
        <motion.h1
        initial={{x:-1000}}
        animate={{x:[0,1400,0]}}
        transition={{
            duration: 3,
            delay: 0.2
        }}
        whileHover={{scale:0.9, opacity:0.2}}
        >


            It is H1 for animation framer motion
        </motion.h1>
    );
}

export default FrameAnimation;
