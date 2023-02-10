
import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWrite  ()  {
    return (
        <div className='text-center bg-white text-black md:p-80 '>
            <h1 className=''>
                <Typewriter
                options={{
                    autoStart:true,
                    loop:true,
                    delay:50,
                    pauseFor:1000,
                    strings:["Hey There", "You are Welcome to Startup Lougue Africa page","To Learn More About Us", "Scroll Up"]
                }}
                />
            </h1>
        </div>
    );
}


export default TypeWrite;
